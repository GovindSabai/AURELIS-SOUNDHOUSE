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
  const [selectedMethod, setSelectedMethod] = useState('card');
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
    
    // Generate a booking ID and save it before redirecting
    const bookingId = `STU-${new Date().toISOString().slice(2,10).replace(/-/g, '')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    const savedBooking = { ...state, bookingId, paymentMethod: selectedMethod, totalPaid: total } as any;
    localStorage.setItem('aurelis_booking', JSON.stringify(savedBooking));
    
    setTimeout(() => {
      // Redirect to mock official payment pages
      if (selectedMethod === 'card') {
        // NOTE: Replace this with your actual Stripe Payment Link (https://buy.stripe.com/...)
        window.location.href = 'https://buy.stripe.com/test_placeholder';
      } else if (selectedMethod === 'crypto') {
        // NOTE: Replace this with your actual Coinbase Commerce Link
        window.location.href = 'https://commerce.coinbase.com/checkout/placeholder';
      }
    }, 1000);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Payment Gateway</h2>
        <p className="text-muted-text">Securely pay for your session.</p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Payment Methods */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Select Payment Method</h3>
          <div className="grid gap-4">
            {PAYMENT_METHODS.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                  selectedMethod === method.id 
                    ? 'bg-champagne-gold/10 border-champagne-gold text-white' 
                    : 'bg-white/5 border-white/10 text-muted-text hover:border-white/30 hover:bg-white/10'
                }`}
              >
                <div className={selectedMethod === method.id ? 'text-champagne-gold' : ''}>
                  {method.icon}
                </div>
                <span className="font-bold">{method.name}</span>
                {selectedMethod === method.id && (
                  <CheckCircle2 size={20} className="ml-auto text-champagne-gold" />
                )}
              </button>
            ))}
          </div>

          {selectedMethod === 'card' && (
            <div className="mt-6 p-6 rounded-2xl bg-[#635BFF]/10 border border-[#635BFF]/30 text-center">
              <p className="text-white mb-4">You will be redirected securely to <strong>Stripe Checkout</strong> to complete your payment.</p>
              <div className="flex justify-center text-[#635BFF]">
                <CreditCard size={48} />
              </div>
            </div>
          )}
          
          {selectedMethod === 'crypto' && (
            <div className="mt-6 p-6 rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/30 text-center">
              <p className="text-white mb-4">You will be redirected securely to <strong>Coinbase Commerce</strong> to pay with Crypto.</p>
              <div className="flex justify-center text-[#0052FF]">
                <Bitcoin size={48} />
              </div>
            </div>
          )}
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
                `Pay €${total} Now`
              )}
            </button>
            <div className="text-center mt-4 text-xs text-muted-text flex items-center justify-center gap-1">
              <CreditCard size={12} /> Secure Encrypted Payment
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
