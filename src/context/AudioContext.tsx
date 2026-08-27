import React, { createContext, useContext, useState, useEffect } from 'react';

export type Track = {
  id: string;
  title: string;
  artist: string;
  category: string;
  image: string;
  durationStr: string;
  durationSec: number;
};

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number; // in seconds
  volume: number;
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

  // Mock audio playback timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
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
  }, [isPlaying, currentTrack]);

  const playTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
      return;
    }
    setCurrentTrack(track);
    setProgress(0);
    setIsPlaying(true);
    
    setRecentlyPlayed((prev) => {
      const filtered = prev.filter(t => t.id !== track.id);
      return [track, ...filtered].slice(0, 5); // Keep last 5
    });
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const seek = (time: number) => setProgress(time);

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
  };

  return (
    <AudioContext.Provider value={{
      currentTrack, isPlaying, progress, volume, favorites, playlist, recentlyPlayed,
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
