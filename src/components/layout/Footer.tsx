import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 sm:pt-20 pb-10 px-6 lg:px-10 mt-24 sm:mt-32">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
        <div className="sm:col-span-2">
          <Link to="/" className="flex items-center mb-4 sm:mb-6 group cursor-pointer inline-flex">
             <img src="/aurelis_logo.svg" alt="Aurelis Logo" className="h-8 sm:h-10 w-auto object-contain" />
          </Link>
          <p className="text-muted-text text-sm max-w-xs leading-relaxed">A premium creative universe for making, shaping, and discovering world-class sound.</p>
          <div className="mt-6 space-y-3 text-sm text-muted-text">
            <p className="flex items-center gap-2 cursor-text"><MapPin size={16} className="shrink-0" /> 123 Music Ave, Sound City, SC 90210</p>
            <p><a href="mailto:hello@aurelissoundhouse.com" className="hover:text-champagne-gold transition-colors flex items-center gap-2"><Mail size={16} className="shrink-0" /> hello@aurelissoundhouse.com</a></p>
            <p><a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors flex items-center gap-2"><Phone size={16} className="shrink-0" /> +1 (555) 123-4567</a></p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 sm:mb-6 uppercase tracking-widest text-xs">Product</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-muted-text">
            <li><Link to="/studio" className="hover:text-champagne-gold transition-colors">Studio</Link></li>
            <li><Link to="/sounds" className="hover:text-champagne-gold transition-colors">Sounds</Link></li>
            <li><Link to="/equipment" className="hover:text-champagne-gold transition-colors">Equipment</Link></li>
            <li><Link to="/services" className="hover:text-champagne-gold transition-colors">Services</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 sm:mb-6 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-muted-text">
            <li><Link to="/artists" className="hover:text-champagne-gold transition-colors">Artists</Link></li>
            <li><Link to="/projects" className="hover:text-champagne-gold transition-colors">Projects</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 sm:mb-6 uppercase tracking-widest text-xs">Connect</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm text-muted-text">
            <li><Link to="/book" className="hover:text-champagne-gold transition-colors">Book a Session</Link></li>
            <li><Link to="/contact" className="hover:text-champagne-gold transition-colors">Contact Us</Link></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">Facebook</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">YouTube</a></li>
            <li><a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">Spotify</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 sm:pt-10 border-t border-white/5 text-xs text-muted-text tracking-wider text-center sm:text-left">
        <p>© 2026 AURELIS SOUNDHOUSE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-champagne-gold transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-champagne-gold transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
