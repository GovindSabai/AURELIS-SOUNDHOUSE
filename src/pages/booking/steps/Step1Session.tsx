import React, { useEffect } from 'react';
import type { BookingState } from '../../../types/booking';
import { SESSION_TYPES, ROOMS } from '../../../types/booking';
import { useLocation } from 'react-router-dom';

interface Props {
  state: BookingState;
  updateState: (updates: Partial<BookingState>) => void;
  onNext: () => void;
}

export function Step1Session({ state, updateState, onNext }: Props) {
  const location = useLocation();

  useEffect(() => {
    // If the user came from a link like /book?room=studio-a, we can pre-select it
    const searchParams = new URLSearchParams(location.search);
    const roomFromUrl = searchParams.get('room');
    if (roomFromUrl && !state.room) {
      updateState({ room: roomFromUrl });
    }
  }, [location, state.room, updateState]);

  const handleSessionSelect = (id: string) => {
    updateState({ sessionType: id });
  };

  const handleRoomSelect = (id: string) => {
    updateState({ room: id });
  };

  const canProceed = state.room && state.sessionType;

  return (
    <div className="animate-fade-in-up space-y-16">
      {/* Studio Selection */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Studio</h2>
          <p className="text-muted-text">Select the space that best fits your project.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOMS.map((room) => {
            const isSelected = state.room === room.id;
            return (
              <div
                key={room.id}
                onClick={() => handleRoomSelect(room.id)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 group
                  ${isSelected 
                    ? 'border-champagne-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                    : 'border-white/10 hover:border-white/30'
                  }`}
              >
                <div className="aspect-[4/3] relative">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-black/40 transition-colors ${isSelected ? 'bg-black/10' : 'group-hover:bg-black/20'}`}></div>
                </div>
                <div className={`p-4 backdrop-blur-md ${isSelected ? 'bg-champagne-gold/10' : 'bg-white/5'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-white">{room.name}</h3>
                    <span className="text-champagne-gold font-bold text-sm">€{room.price}/hr</span>
                  </div>
                  <p className="text-xs text-muted-text">{room.desc}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <button 
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors
                        ${isSelected ? 'bg-champagne-gold text-background' : 'bg-white/10 text-white group-hover:bg-white/20'}`}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Session Selection */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Session</h2>
          <p className="text-muted-text">Select the type of session you need to get started.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SESSION_TYPES.map((session) => {
            const isSelected = state.sessionType === session.id;
            return (
              <div
                key={session.id}
                onClick={() => handleSessionSelect(session.id)}
                className={`relative cursor-pointer p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 group
                  ${isSelected 
                    ? 'bg-champagne-gold/10 border-champagne-gold' 
                    : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
              >
                <div className="text-4xl mb-4">{session.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{session.name}</h3>
                <p className="text-champagne-gold font-bold text-sm mb-2">€{session.price}</p>
                <p className="text-sm text-muted-text mb-6 h-10">{session.desc}</p>
                
                <div className="flex items-center justify-end mt-auto">
                  <button 
                    className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors
                      ${isSelected ? 'bg-champagne-gold text-background' : 'bg-white/10 text-white group-hover:bg-white/20'}`}
                  >
                    {isSelected ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-8">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all
            ${canProceed 
              ? 'bg-champagne-gold text-background hover:bg-white hover:text-background' 
              : 'bg-white/10 text-white/30 cursor-not-allowed'
            }`}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}
