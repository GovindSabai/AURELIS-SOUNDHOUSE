import React from 'react';
import type { BookingState } from '../../../types/booking';

interface Props {
  state: BookingState;
  updateState: (updates: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step3Details({ state, updateState, onNext, onBack }: Props) {
  
  const isComplete = state.name && state.email && state.phone && state.artistName;

  const inputClasses = "w-full bg-background-secondary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-champagne-gold transition-colors placeholder:text-white/20";
  const labelClasses = "block text-sm font-medium text-muted-text mb-2";

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Details</h2>
        <p className="text-muted-text">Tell us about you and your project so we can prepare.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Personal Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-5">
          <h3 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-4">Personal Information</h3>
          
          <div>
            <label className={labelClasses}>Full Name *</label>
            <input 
              type="text" 
              required
              value={state.name}
              onChange={(e) => updateState({ name: e.target.value })}
              className={inputClasses}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className={labelClasses}>Email Address *</label>
            <input 
              type="email" 
              required
              value={state.email}
              onChange={(e) => updateState({ email: e.target.value })}
              className={inputClasses}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className={labelClasses}>Phone Number *</label>
            <input 
              type="tel" 
              required
              value={state.phone}
              onChange={(e) => updateState({ phone: e.target.value })}
              className={inputClasses}
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        {/* Project Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-5">
          <h3 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-4">Project Information</h3>
          
          <div>
            <label className={labelClasses}>Project / Artist Name *</label>
            <input 
              type="text" 
              required
              value={state.artistName}
              onChange={(e) => updateState({ artistName: e.target.value })}
              className={inputClasses}
              placeholder="Band name or Project title"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClasses}>Number of Tracks</label>
              <input 
                type="number" 
                min="1"
                value={state.numTracks}
                onChange={(e) => updateState({ numTracks: parseInt(e.target.value) || 1 })}
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Expected People</label>
              <input 
                type="number" 
                min="1"
                value={state.numPeople}
                onChange={(e) => updateState({ numPeople: parseInt(e.target.value) || 1 })}
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label className={labelClasses}>Genre (Optional)</label>
            <input 
              type="text" 
              value={state.genre}
              onChange={(e) => updateState({ genre: e.target.value })}
              className={inputClasses}
              placeholder="e.g. Hip Hop, Rock, Pop"
            />
          </div>

          <div>
            <label className={labelClasses}>Additional Notes</label>
            <textarea 
              rows={3}
              value={state.notes}
              onChange={(e) => updateState({ notes: e.target.value })}
              className={`${inputClasses} resize-none`}
              placeholder="Share anything we should know before your session..."
            />
          </div>
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
          Review Booking
        </button>
      </div>
    </div>
  );
}
