import React, { useEffect, useState } from 'react';
import type { BookingState } from '../../types/booking';
import { ROOMS, SESSION_TYPES } from '../../types/booking';
import { Calendar, Clock, MapPin, XCircle, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ManageBookingPage() {
  const [booking, setBooking] = useState<BookingState | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('aurelis_booking');
    if (saved) {
      try {
        setBooking(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse booking from localStorage");
      }
    }
  }, []);

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this booking? This action cannot be undone.")) {
      localStorage.removeItem('aurelis_booking');
      setBooking(null);
    }
  };

  if (!booking) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
          <Calendar size={40} className="text-muted-text" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">No Active Bookings</h2>
        <p className="text-muted-text mb-8 max-w-md">You don't have any upcoming sessions booked with us right now.</p>
        <Link to="/book" className="px-8 py-3 bg-champagne-gold hover:bg-warm-highlight text-background font-bold rounded-lg transition-colors uppercase tracking-wider text-sm">
          Book a Session
        </Link>
      </div>
    );
  }

  const room = ROOMS.find(r => r.id === booking.room);
  const session = SESSION_TYPES.find(s => s.id === booking.sessionType);
  const formattedDate = new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto animate-fade-in-up">
        
        <Link to="/" className="inline-flex items-center text-muted-text hover:text-white transition-colors mb-6 sm:mb-8 font-medium text-sm">
          <ChevronLeft size={18} className="mr-1" /> Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Manage Booking</h1>
        <p className="text-muted-text text-sm sm:text-base mb-8 sm:mb-10">View or cancel your upcoming studio session.</p>

        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl relative">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-champagne-gold/20 via-champagne-gold to-champagne-gold/20"></div>

          <div className="p-5 sm:p-8 md:p-10 border-b border-white/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-champagne-gold bg-champagne-gold/10 px-3 py-1 rounded-full border border-champagne-gold/20">
                  Confirmed
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-3 sm:mt-4">{session?.name}</h2>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs text-muted-text uppercase tracking-widest mb-1">Booking ID</p>
                <p className="font-mono text-white font-bold text-sm sm:text-base">{booking.bookingId}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-champagne-gold border border-white/10 shrink-0">
                  <Calendar size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-text mb-0.5 sm:mb-1">Date</p>
                  <p className="font-bold text-white text-sm sm:text-base">{formattedDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-champagne-gold border border-white/10 shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-text mb-0.5 sm:mb-1">Time</p>
                  <p className="font-bold text-white text-sm sm:text-base">{booking.time} ({booking.duration} Hours)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-champagne-gold border border-white/10 shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-text mb-0.5 sm:mb-1">Location</p>
                  <p className="font-bold text-white text-sm sm:text-base">{room?.name}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-10 bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div>
              <p className="text-sm text-muted-text mb-1">Project Name</p>
              <p className="font-bold text-white">{booking.artistName}</p>
            </div>
            
            <button 
              onClick={handleCancel}
              className="w-full sm:w-auto px-6 py-3 border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg font-bold transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              <XCircle size={18} />
              Cancel Booking
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
