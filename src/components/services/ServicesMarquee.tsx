import React from 'react';

const row1 = [
  "RECORDING",
  "MIXING",
  "MASTERING",
  "MUSIC PRODUCTION"
];

const row2 = [
  "VOCAL PRODUCTION",
  "SOUND DESIGN",
  "TRACKING",
  "POST PRODUCTION"
];

export function ServicesMarquee() {
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="py-12 border-y border-white/5 bg-background-secondary overflow-hidden flex flex-col gap-8">
      
      {/* Row 1: Right to Left, Larger Text */}
      <div className="relative w-full group/marquee">
        <div className="flex gap-12 whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused] w-max items-center">
          {duplicatedRow1.map((text, i) => (
            <React.Fragment key={i}>
              <span className="text-3xl md:text-5xl font-serif text-muted-text hover:text-champagne-gold transition-colors duration-300 uppercase tracking-wide">
                {text}
              </span>
              <span className="text-champagne-gold/30 mx-4 text-xl md:text-3xl">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right, Smaller Text */}
      <div className="relative w-full group/marquee">
        <div className="flex gap-12 whitespace-nowrap animate-marquee-reverse group-hover/marquee:[animation-play-state:paused] w-max items-center">
          {duplicatedRow2.map((text, i) => (
            <React.Fragment key={i}>
              <span className="text-xl md:text-3xl font-serif text-muted-text/60 hover:text-champagne-gold transition-colors duration-300 uppercase tracking-wide">
                {text}
              </span>
              <span className="text-champagne-gold/20 mx-4 text-lg md:text-xl">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
