import React from 'react';
import { Link } from 'react-router-dom';

export function StudioCTA() {
  return (
    <section className="py-32 px-6 flex flex-col items-center text-center bg-background border-t border-border relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-1/4 top-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-champagne-gold via-background to-background"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif text-primary-text mb-8">
          MAKE IT <br />
          <span className="italic text-champagne-gold">SOUND HUGE.</span>
        </h2>
        <p className="text-lg text-muted-text max-w-2xl mx-auto mb-12">
          Experience the ultimate creative environment. Book a room, schedule a tour, or talk to our engineers about your next project.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/book" className="px-10 py-5 bg-champagne-gold text-background font-bold text-sm tracking-[0.2em] uppercase hover:bg-warm-highlight transition-colors duration-300">
            Book a Session
          </Link>
          <Link to="/projects" className="px-10 py-5 border border-border text-primary-text font-bold text-sm tracking-[0.2em] uppercase hover:border-champagne-gold hover:text-champagne-gold transition-colors duration-300">
            Hear Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
