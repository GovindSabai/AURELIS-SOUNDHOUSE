import React, { useState } from 'react';
import type { BookingState } from '../../../types/booking';
import { SESSION_TYPES, ROOMS, EQUIPMENT_ADDONS } from '../../../types/booking';
import { CreditCard, Wallet, Bitcoin, CheckCircle2 } from 'lucide-react';

interface Props {
  state: BookingState;
  onNext: () => void;
  onBack: () => void;
}

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit / Debit Card (Stripe)', icon: <CreditCard size={24} /> },
  { id: 'crypto', name: 'Cryptocurrency (Coinbase)', icon: <Bitcoin size={24} /> },
];

export function Step5Payment({ state, onNext, onBack }: Props) {
  const [isProcessing, setIsProcessing] = useState(false);

  const session = SESSION_TYPES.find(s => s.id === state.sessionType);
  const room = ROOMS.find(r => r.id === state.room);

  const selectedEquipment = EQUIPMENT_ADDONS.filter(eq => state.equipment.includes(eq.id));
  const equipmentTotal = selectedEquipment.reduce((sum, eq) => sum + eq.price, 0);
  const basePrice = session?.price || 0;
  const roomPrice = (room?.price || 0) * (state.duration || 3);
  const total = basePrice + roomPrice + equipmentTotal;

  const handlePay = () => {
    setIsProcessing(true);

    // Simulate payment processing time (demo only)
    setTimeout(() => {
      setIsProcessing(false);
      
      // Generate a booking ID and save it
      const bookingId = `STU-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
      const savedBooking = { ...state, bookingId, paymentMethod: 'card', totalPaid: total } as any;
      localStorage.setItem('aurelis_booking', JSON.stringify(savedBooking));
      
      // Complete booking
      onNext();
    }, 2000);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Checkout</h2>
        <p className="text-muted-text">Complete your booking using a credit or debit card.</p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Payment Form */}
        <div className="flex-1">
          <div className="p-6 rounded-2xl bg-black/30 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <CreditCard size={24} className="text-champagne-gold" />
              <h3 className="text-xl font-bold text-white">Payment Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted-text uppercase tracking-widest mb-2">Card Number</label>
                <div className="relative">
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 pl-12 text-white font-mono placeholder:text-white/20 focus:outline-none focus:border-champagne-gold" />
                  <CreditCard size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-muted-text uppercase tracking-widest mb-2">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white font-mono placeholder:text-white/20 focus:outline-none focus:border-champagne-gold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-text uppercase tracking-widest mb-2">Security Code</label>
                  <input type="text" placeholder="CVC" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white font-mono placeholder:text-white/20 focus:outline-none focus:border-champagne-gold" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-muted-text uppercase tracking-widest mb-2">Cardholder Name</label>
                <input type="text" placeholder="Name on card" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-champagne-gold" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-[350px]">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
            <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between items-center text-gray-300">
                <span>Session ({session?.name})</span>
                <span>€{basePrice}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span>Room ({room?.name} - {state.duration}h)</span>
                <span>€{roomPrice}</span>
              </div>
              {equipmentTotal > 0 && (
                <div className="flex justify-between items-center text-gray-300">
                  <span>Equipment Add-ons</span>
                  <span>€{equipmentTotal}</span>
                </div>
              )}
            </div>
            
            <div className="pt-4 border-t border-white/10 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">Total to Pay</span>
                <span className="text-2xl font-bold text-champagne-gold">€{total}</span>
              </div>
            </div>

            <button
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full py-4 bg-champagne-gold hover:bg-warm-highlight text-background font-bold rounded-xl transition-all uppercase tracking-wider text-sm flex justify-center items-center shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                `Pay €${total} Securely`
              )}
            </button>
            <div className="text-center mt-4 text-xs text-muted-text flex items-center justify-center gap-1">
              <CheckCircle2 size={12} className="text-green-500" />
              Payment is secured and encrypted
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start mt-10 max-w-4xl mx-auto">
        <button onClick={onBack} disabled={isProcessing} className="px-6 py-3 rounded-lg font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-wider text-sm disabled:opacity-50">
          ← Back to Review
        </button>
      </div>
    </div>
  );
}
