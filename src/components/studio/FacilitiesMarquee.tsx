import React from 'react';

const facilities = [
  "VINTAGE NEVE CONSOLE", 
  "DOLBY ATMOS MIXING", 
  "WORLD-CLASS ACOUSTICS", 
  "STEINWAY GRAND PIANO", 
  "ANALOG OUTBOARD GEAR",
  "TUBE MICROPHONES",
  "ISOLATION BOOTHS",
  "LOUNGE & CAFE"
];

export function FacilitiesMarquee() {
  const duplicated = [...facilities, ...facilities, ...facilities];

  return (
    <section className="py-12 border-y border-white/5 bg-background-secondary overflow-hidden flex flex-col items-center">
      <div className="relative w-full group/marquee">
        <div className="flex gap-12 whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused] w-max items-center">
          {duplicated.map((text, i) => (
            <React.Fragment key={i}>
              <span className="text-2xl md:text-3xl font-serif text-muted-text hover:text-champagne-gold transition-colors duration-300 uppercase tracking-widest">
                {text}
              </span>
              <span className="w-2 h-2 bg-champagne-gold/30 rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
