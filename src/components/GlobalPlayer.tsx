import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart, ListMusic, X } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export function GlobalPlayer() {
  const { 
    currentTrack, 
    isPlaying, 
    progress, 
    volume, 
    actualDuration,
    favorites,
    playlist,
    togglePlay, 
    seek, 
    setVolume,
    clearTrack,
    toggleFavorite,
    togglePlaylist
  } = useAudio();

  const [isMuted, setIsMuted] = React.useState(false);

  if (!currentTrack) return null;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(1);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  const isFavorite = favorites.some(t => t.id === currentTrack.id);
  const inPlaylist = playlist.some(t => t.id === currentTrack.id);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/10 z-[100] px-4 md:px-8 py-3 flex items-center justify-between animate-fade-in-up">
      
      {/* Track Info */}
      <div className="flex items-center gap-4 w-1/4 min-w-[200px]">
        <img src={currentTrack.image} alt={currentTrack.title} className="w-12 h-12 rounded object-cover" />
        <div className="hidden sm:block">
          <h4 className="text-white font-bold text-sm truncate">{currentTrack.title}</h4>
          <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
        </div>
        <button 
          onClick={() => toggleFavorite(currentTrack)} 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Heart size={18} className={isFavorite ? "fill-champagne-gold text-champagne-gold" : ""} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center w-2/4 max-w-2xl px-4">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={20} className="fill-black" /> : <Play size={20} className="fill-black ml-1" />}
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="w-full flex items-center gap-3 text-xs text-gray-400 font-mono">
          <span>{formatTime(progress)}</span>
          <input 
            type="range" 
            min="0" 
            max={actualDuration || currentTrack.durationSec} 
            value={progress}
            onChange={handleSeek}
            className="flex-1 h-1 bg-white/20 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
            style={{
              background: `linear-gradient(to right, #00f2fe ${(progress / (actualDuration || currentTrack.durationSec)) * 100}%, rgba(255,255,255,0.2) 0%)`
            }}
          />
          <span>{formatTime(actualDuration || currentTrack.durationSec)}</span>
        </div>
      </div>

      {/* Utilities */}
      <div className="flex items-center justify-end gap-4 w-1/4 min-w-[150px]">
        <button 
          onClick={() => togglePlaylist(currentTrack)} 
          className={`hidden md:block transition-colors ${inPlaylist ? 'text-champagne-gold' : 'text-gray-400 hover:text-white'}`}
          title={inPlaylist ? "Remove from Playlist" : "Add to Playlist"}
        >
          <ListMusic size={18} />
        </button>
        <div className="hidden md:flex items-center gap-2 w-24">
          <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume}
            onChange={handleVolume}
            className="w-full h-1 bg-white/20 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
            style={{
              background: `linear-gradient(to right, #fff ${volume * 100}%, rgba(255,255,255,0.2) 0%)`
            }}
          />
        </div>
        <button onClick={clearTrack} className="text-gray-400 hover:text-white transition-colors ml-2">
          <X size={20} />
        </button>
      </div>
      
    </div>
  );
}
