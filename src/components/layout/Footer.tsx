import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10 px-6 lg:px-10 mt-32">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
        <div className="col-span-2">
          <Link to="/" className="flex items-center mb-6 group cursor-pointer inline-flex">
             <img src="/aurelis_logo.svg" alt="Aurelis Logo" className="h-10 w-auto object-contain" />
          </Link>
          <p className="text-muted-text text-sm max-w-xs leading-relaxed">A premium creative universe for making, shaping, and discovering world-class sound.</p>
          <div className="mt-6 space-y-2 text-sm text-muted-text">
            <p><Link to="/contact" className="hover:text-champagne-gold transition-colors">123 Music Ave, Sound City, SC 90210</Link></p>
            <p><Link to="/contact" className="hover:text-champagne-gold transition-colors">hello@aurelissoundhouse.com</Link></p>
            <p><Link to="/contact" className="hover:text-champagne-gold transition-colors">+1 (555) 123-4567</Link></p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Product</h4>
          <ul className="space-y-4 text-sm text-muted-text">
            <li><Link to="/studio" className="hover:text-champagne-gold transition-colors">Studio</Link></li>
            <li><Link to="/sounds" className="hover:text-champagne-gold transition-colors">Sounds</Link></li>
            <li><Link to="/equipment" className="hover:text-champagne-gold transition-colors">Equipment</Link></li>
            <li><Link to="/services" className="hover:text-champagne-gold transition-colors">Services</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-4 text-sm text-muted-text">
            <li><Link to="/artists" className="hover:text-champagne-gold transition-colors">Artists</Link></li>
            <li><Link to="/projects" className="hover:text-champagne-gold transition-colors">Projects</Link></li>

          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Connect</h4>
          <ul className="space-y-4 text-sm text-muted-text">
            <li><Link to="/book" className="hover:text-champagne-gold transition-colors">Book a Session</Link></li>
            <li><Link to="/contact" className="hover:text-champagne-gold transition-colors">Contact Us</Link></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">Facebook</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">YouTube</a></li>
            <li><a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">Spotify</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-xs text-muted-text tracking-wider">
        <p>© 2026 AURELIS SOUNDHOUSE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-champagne-gold transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-champagne-gold transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
