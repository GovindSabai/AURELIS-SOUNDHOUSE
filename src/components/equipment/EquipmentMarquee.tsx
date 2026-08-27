import React from 'react';

const gearNames = [
  "NEUMANN U47",
  "SSL DUALITY",
  "NEVE 1073",
  "ROLAND JUPITER-8",
  "TUBE-TECH CL1B",
  "TELEFUNKEN ELA M 251",
  "MOOG VOYAGER",
  "API 2500"
];

export function EquipmentMarquee() {
  const duplicatedRow1 = [...gearNames, ...gearNames, ...gearNames];

  return (
    <section className="py-12 border-y border-white/5 bg-background-secondary overflow-hidden">
      <div className="relative w-full group/marquee">
        <div className="flex gap-12 whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused] w-max items-center">
          {duplicatedRow1.map((text, i) => (
            <React.Fragment key={i}>
              <span className="text-4xl md:text-6xl font-serif text-muted-text hover:text-champagne-gold transition-colors duration-300 uppercase tracking-wide">
                {text}
              </span>
              <span className="text-champagne-gold/30 mx-4 text-2xl md:text-4xl">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
