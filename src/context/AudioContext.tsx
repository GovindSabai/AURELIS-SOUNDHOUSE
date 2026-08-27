import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export type Track = {
  id: string;
  title: string;
  artist: string;
  category: string;
  image: string;
  durationStr: string;
  durationSec: number;
  audioUrl?: string;
};

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number; // in seconds
  volume: number;
  actualDuration: number; // in seconds, from the real file
  favorites: string[]; // array of track IDs
  playlist: Track[];
  recentlyPlayed: Track[];
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  setVolume: (vol: number) => void;
  toggleFavorite: (trackId: string) => void;
  addToPlaylist: (track: Track) => void;
  clearTrack: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [actualDuration, setActualDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // LocalStorage state
  const [favorites, setFavorites] = useState<string[]>([]);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Track[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const favs = localStorage.getItem('aurelis_favs');
      if (favs) setFavorites(JSON.parse(favs));
      const recent = localStorage.getItem('aurelis_recent');
      if (recent) setRecentlyPlayed(JSON.parse(recent));
    } catch (e) {}
  }, []);

  // Save to local storage when changed
  useEffect(() => {
    localStorage.setItem('aurelis_favs', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('aurelis_recent', JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  // Audio Playback Engine
  useEffect(() => {
    if (currentTrack && currentTrack.audioUrl) {
      // Create or update audio element
      if (!audioRef.current) {
        audioRef.current = new Audio(currentTrack.audioUrl);
      } else {
        audioRef.current.src = currentTrack.audioUrl;
      }
      audioRef.current.volume = volume;
      audioRef.current.load();
      
      const setAudioData = () => {
        if (audioRef.current) {
          setActualDuration(audioRef.current.duration);
        }
      };
      
      const setAudioTime = () => setProgress(audioRef.current?.currentTime || 0);
      const onEnded = () => {
        setIsPlaying(false);
        setProgress(audioRef.current?.duration || currentTrack.durationSec);
      };

      audioRef.current.addEventListener('loadedmetadata', setAudioData);
      audioRef.current.addEventListener('timeupdate', setAudioTime);
      audioRef.current.addEventListener('ended', onEnded);

      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Audio play failed (maybe autoplay blocked):', e));
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', setAudioData);
          audioRef.current.removeEventListener('timeupdate', setAudioTime);
          audioRef.current.removeEventListener('ended', onEnded);
        }
      };
    } else {
      // Fallback: Fake timer for tracks without an audioUrl
      let interval: NodeJS.Timeout;
      setActualDuration(currentTrack?.durationSec || 0);
      if (isPlaying && currentTrack) {
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= currentTrack.durationSec) {
              setIsPlaying(false);
              return currentTrack.durationSec;
            }
            return prev + 1;
          });
        }, 1000);
      }
      return () => clearInterval(interval);
    }
  }, [currentTrack]); // We only re-run source binding when track changes

  // Handle Play/Pause
  useEffect(() => {
    if (audioRef.current && currentTrack?.audioUrl) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Play failed:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Handle Volume Changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
      return;
    }
    setCurrentTrack(track);
    setProgress(0);
    setActualDuration(track.durationSec); // Temp until metadata loads
    setIsPlaying(true);
    
    setRecentlyPlayed((prev) => {
      const filtered = prev.filter(t => t.id !== track.id);
      return [track, ...filtered].slice(0, 5); // Keep last 5
    });
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const seek = (time: number) => {
    setProgress(time);
    if (audioRef.current && currentTrack?.audioUrl) {
      audioRef.current.currentTime = time;
    }
  };

  const toggleFavorite = (trackId: string) => {
    setFavorites(prev => 
      prev.includes(trackId) ? prev.filter(id => id !== trackId) : [...prev, trackId]
    );
  };

  const addToPlaylist = (track: Track) => {
    setPlaylist(prev => [...prev, track]);
  };

  const clearTrack = () => {
    setCurrentTrack(null);
    setIsPlaying(false);
    setProgress(0);
    setActualDuration(0);
  };

  return (
    <AudioContext.Provider value={{
      currentTrack, isPlaying, progress, volume, actualDuration, favorites, playlist, recentlyPlayed,
      playTrack, togglePlay, seek, setVolume, toggleFavorite, addToPlaylist, clearTrack
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) throw new Error("useAudio must be used within an AudioProvider");
  return context;
};
