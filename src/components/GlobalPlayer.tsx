import React from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, ListMusic, Maximize2, X } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export function GlobalPlayer() {
  const { currentTrack, isPlaying, progress, volume, actualDuration, togglePlay, seek, setVolume, favorites, toggleFavorite, clearTrack } = useAudio();

  if (!currentTrack) return null;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const safeDuration = actualDuration > 0 ? actualDuration : currentTrack.durationSec;
  const progressPercent = Math.min(100, (progress / safeDuration) * 100);

  const toggleMute = () => {
    setVolume(volume > 0 ? 0 : 1);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#05060A]/95 backdrop-blur-xl border-t border-white/10 z-[100] px-6 py-4 flex items-center justify-between animate-fade-in-up">
      
      {/* Track Info */}
      <div className="flex items-center gap-4 w-1/4">
        <img src={currentTrack.image} alt={currentTrack.title} className="w-12 h-12 rounded object-cover" />
        <div>
          <h4 className="text-white font-bold text-sm">{currentTrack.title}</h4>
          <p className="text-gray-400 text-xs">{currentTrack.artist}</p>
        </div>
        <button onClick={() => toggleFavorite(currentTrack.id)} className="ml-2">
          <Heart size={18} className={favorites.includes(currentTrack.id) ? "fill-accent-violet text-accent-violet" : "text-gray-400 hover:text-white"} />
        </button>
      </div>

      {/* Controls & Progress */}
      <div className="flex flex-col items-center flex-1 max-w-2xl gap-2">
        <div className="flex items-center gap-6">
          <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 transition-transform">
            {isPlaying ? <Pause size={20} className="fill-black" /> : <Play size={20} className="fill-black ml-1" />}
          </button>
        </div>
        <div className="w-full flex items-center gap-3 text-xs text-gray-400 font-mono">
          <span>{formatTime(progress)}</span>
          <div 
            className="h-1.5 flex-1 bg-white/10 rounded-full cursor-pointer relative group overflow-hidden"
            onClick={(e) => {
              const bounds = e.currentTarget.getBoundingClientRect();
              const percent = (e.clientX - bounds.left) / bounds.width;
              seek(percent * safeDuration);
            }}
          >
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" style={{ width: `${progressPercent}%` }}></div>
            {/* Playhead dot */}
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ left: `calc(${progressPercent}% - 6px)` }}></div>
          </div>
          <span>{formatTime(safeDuration)}</span>
        </div>
      </div>

      {/* Utilities */}
      <div className="flex items-center justify-end gap-4 w-1/4 text-gray-400">
        <button className="hover:text-white"><ListMusic size={18} /></button>
        <button onClick={toggleMute} className="hover:text-white">
          {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button className="hover:text-white"><Maximize2 size={18} /></button>
        <button onClick={clearTrack} className="hover:text-white ml-2"><X size={18} /></button>
      </div>
    </div>
  );
}
