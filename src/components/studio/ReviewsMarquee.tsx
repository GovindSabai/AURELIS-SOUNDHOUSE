import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { text: "The cross-platform sync is magic. Start on a commute, finish on desktop.", user: "Sarah M.", role: "Producer" },
  { text: "I threw away my old DAW. AURALYN is the future of music.", user: "Devon C.", role: "Artist" },
  { text: "Working with vocalists across the globe in real-time. Unmatched.", user: "Marcus V.", role: "Mix Engineer" },
  { text: "No more waiting for heavy plugins to load. Everything is instant.", user: "Elena R.", role: "Sound Designer" },
  { text: "The loops and synths are out of this world. Top tier production quality.", user: "DJ Kael", role: "Electronic Artist" },
  { text: "I can't believe how intuitive AURALYN is. I compose entire scores on my phone.", user: "Alex T.", role: "Composer" }
];

export function ReviewsMarquee() {
  const duplicated = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-xs font-bold tracking-[0.3em] text-muted-text uppercase">What Artists Say</h2>
      </div>

      <div className="relative w-full group/marquee">
        {/* We use animate-marquee-reverse to scroll from right to left */}
        <div className="flex gap-8 whitespace-nowrap animate-marquee-reverse group-hover/marquee:[animation-play-state:paused] w-max items-center px-4">
          {duplicated.map((review, i) => (
            <div key={i} className="relative w-[350px] md:w-[450px] shrink-0 bg-background-secondary border border-border p-8 rounded-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="text-champagne-gold text-4xl font-serif leading-none">"</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className="fill-champagne-gold text-champagne-gold" />
                  ))}
                </div>
              </div>
              <p className="text-white text-lg font-serif mb-6 whitespace-normal leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <div className="w-10 h-10 rounded-full bg-champagne-gold/20 flex items-center justify-center text-champagne-gold font-bold font-serif">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <h5 className="text-sm font-bold tracking-[0.1em] text-primary-text uppercase">{review.user}</h5>
                  <span className="text-xs text-muted-text uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
