import React, { useState } from 'react';
import type { BookingState } from '../../types/booking';
import { initialBookingState } from '../../types/booking';
import { Step1Session } from './steps/Step1Session';
import { Step2Schedule } from './steps/Step2Schedule';
import { Step3Details } from './steps/Step3Details';
import { Step4Review } from './steps/Step4Review';
import { Step5Payment } from './steps/Step5Payment';
import { BookingSuccess } from './BookingSuccess';
import { useAuth } from '../../context/AuthContext';

const STEPS = [
  { id: 1, label: 'SESSION' },
  { id: 2, label: 'SCHEDULE' },
  { id: 3, label: 'DETAILS' },
  { id: 4, label: 'REVIEW' },
  { id: 5, label: 'PAYMENT' }
];

export function BookingPage() {
  const { user } = useAuth();
  
  // Pre-fill user data if logged in
  const [state, setState] = useState<BookingState>({
    ...initialBookingState,
    name: user?.displayName || '',
    email: user?.email || '',
  });
  
  const [currentStep, setCurrentStep] = useState(1);

  const updateState = (updates: Partial<BookingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative">
      {/* Background styling matching the dark cinematic aesthetic */}
      <div className="absolute inset-0 z-[-1] bg-[url('/studio-bg-dark.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background via-background/90 to-background"></div>
      
      <div className="max-w-[1200px] mx-auto">
        
        {/* Progress Indicator */}
        {currentStep < 6 && (
          <div className="flex items-center justify-center mb-16 px-4">
            <div className="flex items-center space-x-2 md:space-x-4 max-w-3xl w-full">
              {STEPS.map((step, index) => {
                const isActive = step.id === currentStep;
                const isPast = step.id < currentStep;
                return (
                  <React.Fragment key={step.id}>
                    <div className={`flex flex-col items-center gap-2 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${isActive ? 'bg-champagne-gold text-background' : isPast ? 'bg-white/20 text-white' : 'border border-white/20 text-white'}`}>
                        {step.id < 10 ? `0${step.id}` : step.id}
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest font-bold hidden sm:block ${isActive ? 'text-champagne-gold' : 'text-white'}`}>
                        {step.label}
                      </span>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div className={`flex-1 h-[1px] ${isPast ? 'bg-champagne-gold' : 'bg-white/10'}`}></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}

        {/* Steps Content */}
        <div className="relative">
          {currentStep === 1 && <Step1Session state={state} updateState={updateState} onNext={nextStep} />}
          {currentStep === 2 && <Step2Schedule state={state} updateState={updateState} onNext={nextStep} onBack={prevStep} />}
          {currentStep === 3 && <Step3Details state={state} updateState={updateState} onNext={nextStep} onBack={prevStep} />}
          {currentStep === 4 && <Step4Review state={state} onNext={nextStep} onBack={prevStep} />}
          {currentStep === 5 && <Step5Payment state={state} onNext={nextStep} onBack={prevStep} />}
          {currentStep === 6 && <BookingSuccess state={state} />}
        </div>

        {/* Policies and Help (shown on steps 1-4) */}
        {currentStep < 5 && (
          <div className="mt-32 max-w-4xl mx-auto space-y-12 animate-fade-in">
            
            {/* What to Bring */}
            <div className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">What to Bring</h4>
                <ul className="space-y-2 text-sm text-muted-text">
                  <li className="flex gap-2"><span>•</span> Your project/session files</li>
                  <li className="flex gap-2"><span>•</span> Reference tracks</li>
                  <li className="flex gap-2"><span>•</span> Lyrics/charts</li>
                  <li className="flex gap-2"><span>•</span> Instrumental/stems if applicable</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">We Recommend</h4>
                <ul className="space-y-2 text-sm text-muted-text">
                  <li className="flex gap-2"><span>•</span> Arriving 10–15 minutes early</li>
                  <li className="flex gap-2"><span>•</span> Bringing backup files on a drive</li>
                  <li className="flex gap-2"><span>•</span> Sharing references before the session</li>
                </ul>
              </div>
            </div>

            {/* Booking Policy */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-4">Booking Policy</h4>
              <p className="text-sm text-muted-text mb-4">
                A 50% deposit is required to confirm bookings longer than 4 hours. 
                Cancellations must be made at least 48 hours in advance for a full refund.
                Late arrivals will be billed from the scheduled start time.
              </p>
            </div>

            {/* Help */}
            <div className="text-center py-8">
              <h4 className="text-xl font-bold text-white mb-2">Not Sure Which Session You Need?</h4>
              <p className="text-sm text-muted-text mb-6">Tell us about your project and we'll help you choose.</p>
              <a href="/contact" className="inline-block px-6 py-3 border border-white/20 hover:bg-white/5 text-white font-bold rounded-lg transition-colors uppercase tracking-wider text-sm">
                Talk to the Studio →
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
