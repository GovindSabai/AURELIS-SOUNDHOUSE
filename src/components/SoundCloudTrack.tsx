import React, { useMemo } from 'react';
import { Play, Pause, Heart } from 'lucide-react';
import type { Track } from '../context/AudioContext';

interface Props {
  track: Track;
  isCurrentlyPlaying: boolean;
  isPlaying: boolean;
  playTrack: (track: Track) => void;
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

export const SoundCloudTrack = ({ track, isCurrentlyPlaying, isPlaying, playTrack, toggleFavorite, favorites }: Props) => {
  const isFav = favorites.includes(track.id);
  const playCount = useMemo(() => Math.floor(Math.random() * 5000), [track.id]);
  const timeAgo = useMemo(() => `${Math.floor(Math.random() * 24) + 1}h ago`, [track.id]);
  const waveform = useMemo(() => Array.from({ length: 50 }).map(() => Math.max(10, Math.random() * 100)), [track.id]);

  const trackToPlay = {
    ...track,
    durationSec: track.durationSec || 180
  };

  return (
    <div className="flex gap-4 p-4 bg-background-secondary/50 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
      <div 
        className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-white/10 rounded-md overflow-hidden relative group cursor-pointer" 
        onClick={() => playTrack(trackToPlay)}
      >
        <img src={`https://loremflickr.com/200/200/abstract,music?lock=${track.id}`} alt={track.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          {isCurrentlyPlaying && isPlaying ? <Pause size={32} className="text-white" /> : <Play size={32} className="text-white ml-1 fill-current" />}
        </div>
      </div>
      
      <div className="flex-grow flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <button 
                onClick={() => playTrack(trackToPlay)}
                className="w-10 h-10 rounded-full bg-champagne-gold text-background hidden md:flex items-center justify-center hover:scale-105 transition-transform shrink-0"
              >
                {isCurrentlyPlaying && isPlaying ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current ml-1" />}
              </button>
              <div className="truncate">
                <h5 className="font-bold text-white truncate text-base leading-tight mb-1">{track.title}</h5>
                <span className="text-muted-text text-sm truncate block">{track.artist}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-1 shrink-0 ml-4">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted-text">
                <span className="flex items-center gap-1"><Play size={10} className="fill-current" /> {playCount}</span>
                <span>{timeAgo}</span>
              </div>
              <span className="text-[10px] md:text-xs text-muted-text bg-white/5 px-2 py-[2px] rounded-full">{track.category || 'Other'}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-8 flex items-end gap-[1px] md:gap-[2px] mt-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          {waveform.map((h, idx) => (
            <div 
              key={idx} 
              className={`flex-grow bg-champagne-gold rounded-t-sm ${isCurrentlyPlaying && isPlaying ? 'animate-pulse' : ''}`} 
              style={{ 
                height: `${h}%`,
                animationDuration: isCurrentlyPlaying && isPlaying ? `${0.5 + (idx % 3) * 0.2}s` : undefined,
                animationDelay: isCurrentlyPlaying && isPlaying ? `${idx * 0.05}s` : undefined
              }} 
            />
          ))}
        </div>

        <div className="flex items-center gap-4 mt-3 text-muted-text">
          <button 
            onClick={() => {
              toggleFavorite(track.id);
              if (!favorites.includes(track.id)) {
                alert("Added to your profile! (Login feature coming soon)");
              }
            }} 
            className="hover:text-champagne-gold transition-colors flex items-center gap-1"
          >
            <Heart size={16} className={isFav ? "fill-champagne-gold text-champagne-gold" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
};
