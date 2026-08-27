import React from 'react';
import type { BookingState } from '../../types/booking';
import { ROOMS } from '../../types/booking';
import { CheckCircle, Calendar, Edit, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  state: BookingState;
}

export function BookingSuccess({ state }: Props) {
  const room = ROOMS.find(r => r.id === state.room);
  
  // Read booking ID from local storage if not available in state
  let bookingId = state.bookingId;
  if (!bookingId) {
    try {
      const saved = JSON.parse(localStorage.getItem('aurelis_booking') || '{}');
      bookingId = saved.bookingId;
    } catch(e) {}
  }
  
  const formattedDate = new Date(state.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="animate-fade-in-up max-w-3xl mx-auto text-center pt-8">
      
      <div className="w-24 h-24 bg-champagne-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-champagne-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
        <CheckCircle className="w-12 h-12 text-champagne-gold" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Session Confirmed</h2>
      <p className="text-xl text-muted-text mb-2">You're officially booked. 🎧</p>
      <p className="text-muted-text mb-12">Your session has been reserved successfully. A confirmation email has been sent to <strong className="text-white">{state.email}</strong>.</p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-left mb-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne-gold to-transparent"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-muted-text mb-1 uppercase tracking-wider">Booking ID</p>
            <p className="text-xl font-mono text-white font-bold">{bookingId || 'PENDING'}</p>
          </div>
          <div>
            <p className="text-sm text-muted-text mb-1 uppercase tracking-wider">Studio</p>
            <p className="text-xl text-white font-bold">{room?.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-text mb-1 uppercase tracking-wider">Date</p>
            <p className="text-xl text-white font-bold">{formattedDate}</p>
          </div>
          <div>
            <p className="text-sm text-muted-text mb-1 uppercase tracking-wider">Time</p>
            <p className="text-xl text-white font-bold">{state.time} – ({state.duration} Hours)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-lg transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
          <Calendar size={18} />
          Add to Calendar
        </button>
        <Link to="/" className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-lg transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
          Back to Home
        </Link>
      </div>

      <div className="border-t border-white/10 pt-10">
        <h4 className="text-white font-bold mb-2">Need to make a change?</h4>
        <Link to="/manage-booking" className="text-champagne-gold hover:text-white transition-colors text-sm flex items-center justify-center gap-2 mx-auto inline-flex">
          <Edit size={14} /> Manage Your Booking
        </Link>
      </div>

    </div>
  );
}
