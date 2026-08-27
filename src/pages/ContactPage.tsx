import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-24 min-h-screen bg-background flex flex-col">
      <section className={`px-6 lg:px-12 max-w-[1400px] mx-auto py-20 w-full animate-fade-in-up ${isSubmitted ? 'flex-grow flex items-center justify-center min-h-[60vh]' : ''}`}>
        
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto w-full animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-champagne-gold/10 flex items-center justify-center mb-8 border border-champagne-gold/20">
              <Mail size={40} className="text-champagne-gold" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Message Received</h1>
            <p className="text-muted-text mb-12 text-lg leading-relaxed">
              Thank you! Your inquiry has been successfully sent. Our team will review your project details and get back to you shortly.
            </p>
            <Link to="/" className="bg-champagne-gold text-background font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-lg hover:bg-white transition-colors">
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center mb-16">
              <h4 className="text-champagne-gold tracking-[0.3em] uppercase text-xs font-bold mb-6">Get in Touch</h4>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                LET'S TALK <br/>
                <span className="text-muted-text italic">PROJECTS.</span>
              </h1>
              <p className="text-muted-text max-w-xl mx-auto">
                Ready to elevate your sound? Whether you're looking for production, mixing, or a full live recording session, we're here to help you bring your vision to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-8">
                <div className="flex items-start gap-4 group cursor-text">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-champagne-gold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Aurelis Soundhouse</h5>
                    <p className="text-muted-text text-sm">123 Music Ave<br />Sound City, SC 90210</p>
                  </div>
                </div>
                
                <a href="mailto:hello@aurelissoundhouse.com" className="flex items-start gap-4 group cursor-pointer block">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-champagne-gold transition-colors">
                    <Mail size={20} className="text-champagne-gold group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1 group-hover:text-champagne-gold transition-colors">Email</h5>
                    <p className="text-muted-text text-sm group-hover:text-white transition-colors">hello@aurelissoundhouse.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer block">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-champagne-gold transition-colors">
                    <Phone size={20} className="text-champagne-gold group-hover:text-background transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1 group-hover:text-champagne-gold transition-colors">Phone / WhatsApp</h5>
                    <p className="text-muted-text text-sm group-hover:text-white transition-colors">+1 (555) 123-4567</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 lg:p-12 relative">
                <h3 className="text-2xl font-serif text-white mb-8">Send a Message</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-muted-text mb-2">Name</label>
                    <input type="text" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-champagne-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-muted-text mb-2">Email</label>
                    <input type="email" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-champagne-gold transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-muted-text mb-2">Project Type</label>
                    <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-champagne-gold transition-colors appearance-none">
                      <option className="bg-background">Recording</option>
                      <option className="bg-background">Mixing</option>
                      <option className="bg-background">Mastering</option>
                      <option className="bg-background">Production</option>
                      <option className="bg-background">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-muted-text mb-2">Message</label>
                    <textarea required rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-champagne-gold transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-champagne-gold text-background font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-white transition-colors mt-4">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
