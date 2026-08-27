import React, { useState } from 'react';
import type { BookingState } from '../../../types/booking';
import { SESSION_TYPES, ROOMS, EQUIPMENT_ADDONS } from '../../../types/booking';

interface Props {
  state: BookingState;
  onNext: () => void;
  onBack: () => void;
}

export function Step4Review({ state, onNext, onBack }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const session = SESSION_TYPES.find(s => s.id === state.sessionType);
  const room = ROOMS.find(r => r.id === state.room);
  
  const selectedEquipment = EQUIPMENT_ADDONS.filter(eq => state.equipment.includes(eq.id));
  const equipmentTotal = selectedEquipment.reduce((sum, eq) => sum + eq.price, 0);
  const basePrice = session?.price || 0;
  const roomPrice = (room?.price || 0) * (state.duration || 3);
  const total = basePrice + roomPrice + equipmentTotal;

  const handleConfirm = () => {
    onNext(); // Go to payment step
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Review Your Booking</h2>
        <p className="text-muted-text">Please review your session details before confirming.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
          
          <div className="p-5 sm:p-8 border-b border-white/10 bg-black/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Your Session</h3>
            <p className="text-champagne-gold font-medium text-sm sm:text-base">{state.artistName}</p>
          </div>

          <div className="p-5 sm:p-8 space-y-6">
            
            {/* Table-like layout for summary */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-muted-text">Session Type</span>
                <div className="text-right">
                  <div className="font-bold text-white">{session?.name}</div>
                  <div className="text-sm text-champagne-gold font-bold">€{basePrice}</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-muted-text">Room</span>
                <div className="text-right">
                  <div className="font-bold text-white">{room?.name}</div>
                  <div className="text-sm text-champagne-gold font-bold">€{roomPrice} (€{room?.price}/hr x {state.duration || 3} hrs)</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-muted-text">Date</span>
                <span className="font-bold text-white text-right">{new Date(state.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-muted-text">Time</span>
                <span className="font-bold text-white text-right">{state.time}</span>
              </div>
              {selectedEquipment.length > 0 && (
                <div className="py-2 border-b border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-muted-text">Equipment Add-ons</span>
                    <span className="text-sm text-champagne-gold font-bold">€{equipmentTotal}</span>
                  </div>
                  <ul className="text-sm text-white font-bold text-right space-y-1">
                    {selectedEquipment.map(eq => (
                      <li key={eq.id}>{eq.name} - €{eq.price}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex justify-between items-center py-4 mt-4 bg-white/5 rounded-lg px-4">
                <span className="text-lg font-bold text-white">Total Amount</span>
                <span className="text-2xl font-bold text-champagne-gold">€{total}</span>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button onClick={onBack} disabled={isSubmitting} className="px-6 py-3 rounded-lg font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider text-sm disabled:opacity-50">
            ← Back
          </button>
          <button 
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="px-8 py-3 bg-champagne-gold hover:bg-warm-highlight text-background font-bold rounded-lg transition-colors uppercase tracking-wider text-sm disabled:opacity-50 min-w-[200px] flex justify-center items-center"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Proceed to Payment →'
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
