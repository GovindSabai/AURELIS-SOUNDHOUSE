import React, { useState } from 'react';
import type { BookingState } from '../../../types/booking';
import { ROOMS, EQUIPMENT_ADDONS } from '../../../types/booking';
import { ChevronRight, ChevronDown, Check } from 'lucide-react';

interface Props {
  state: BookingState;
  updateState: (updates: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

// Generate simple mock dates for the calendar
const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      dateStr: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
      available: Math.random() > 0.2 // Randomly make some dates unavailable for demo
    });
  }
  return dates;
};

const DATES = generateDates();
const TIMES = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'];

export function Step2Schedule({ state, updateState, onNext, onBack }: Props) {
  const [showEquipment, setShowEquipment] = useState(false);

  const toggleEquipment = (id: string) => {
    const newEq = state.equipment.includes(id)
      ? state.equipment.filter(e => e !== id)
      : [...state.equipment, id];
    updateState({ equipment: newEq });
  };

  const isComplete = state.room && state.date && state.time;

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Schedule</h2>
        <p className="text-muted-text">Select your preferred room, date, and time.</p>
      </div>

      <div className="space-y-8">
        
        {/* Room Selection */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-4">Choose Your Room</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ROOMS.map(room => (
              <button
                key={room.id}
                onClick={() => updateState({ room: room.id })}
                className={`p-4 rounded-xl border text-left transition-all ${
                  state.room === room.id 
                    ? 'bg-champagne-gold/20 border-champagne-gold' 
                    : 'bg-background-secondary border-white/10 hover:border-white/30'
                }`}
              >
                <div className="font-bold text-white">{room.name}</div>
                <div className="text-xs text-muted-text mt-1">{room.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Date & Time Selection */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-4">Select Date & Time</h3>
          
          <div className="mb-6 overflow-x-auto pb-4 custom-scrollbar">
            <div className="flex gap-3 min-w-max">
              {DATES.map((d, i) => {
                const isSelected = state.date === d.dateStr;
                return (
                  <button
                    key={i}
                    disabled={!d.available}
                    onClick={() => updateState({ date: d.dateStr })}
                    className={`flex flex-col items-center justify-center w-20 h-24 rounded-xl border transition-all ${
                      !d.available 
                        ? 'opacity-30 cursor-not-allowed border-transparent bg-white/5' 
                        : isSelected
                          ? 'bg-champagne-gold text-background border-champagne-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                          : 'bg-background-secondary border-white/10 text-white hover:border-champagne-gold/50'
                    }`}
                  >
                    <span className={`text-xs font-medium mb-1 ${isSelected ? 'text-background/80' : 'text-muted-text'}`}>{d.month}</span>
                    <span className="text-2xl font-bold">{d.dayNum}</span>
                    <span className={`text-xs mt-1 ${isSelected ? 'text-background/80' : 'text-muted-text'}`}>{d.dayName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {TIMES.map(time => {
              const isSelected = state.time === time;
              return (
                <button
                  key={time}
                  onClick={() => updateState({ time })}
                  className={`py-3 rounded-lg text-sm font-bold transition-all border ${
                    isSelected
                      ? 'bg-champagne-gold text-background border-champagne-gold'
                      : 'bg-background-secondary border-white/10 text-white hover:border-champagne-gold/50'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Equipment (Optional) */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
          <button 
            onClick={() => setShowEquipment(!showEquipment)}
            className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
          >
            <div>
              <h3 className="text-xl font-bold text-white">Optional Equipment</h3>
              <p className="text-sm text-muted-text">Add premium gear to your session</p>
            </div>
            {showEquipment ? <ChevronDown className="text-white" /> : <ChevronRight className="text-white" />}
          </button>
          
          {showEquipment && (
            <div className="p-6 pt-0 border-t border-white/10 mt-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {EQUIPMENT_ADDONS.map(eq => {
                const isSelected = state.equipment.includes(eq.id);
                return (
                  <button
                    key={eq.id}
                    onClick={() => toggleEquipment(eq.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      isSelected 
                        ? 'bg-champagne-gold/10 border-champagne-gold' 
                        : 'bg-background-secondary border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-bold text-white text-sm">{eq.name}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${isSelected ? 'bg-champagne-gold border-champagne-gold text-background' : 'border-white/20'}`}>
                      {isSelected && <Check size={14} />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

      </div>

      <div className="flex justify-between mt-10">
        <button onClick={onBack} className="px-6 py-3 rounded-lg font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider text-sm">
          ← Back
        </button>
        <button 
          onClick={onNext} 
          disabled={!isComplete}
          className="px-8 py-3 bg-champagne-gold hover:bg-warm-highlight text-background font-bold rounded-lg transition-colors uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
