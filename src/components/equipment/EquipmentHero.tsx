import React from 'react';

export function EquipmentHero() {
  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne-gold/10 via-background to-background"></div>

      <div className="relative z-10 text-center px-6 mt-64">
        <span className="text-xs font-bold tracking-[0.4em] text-champagne-gold uppercase block mb-6 animate-[fadeInUp_1s_ease-out]">
          World Class Arsenal
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight animate-[fadeInUp_1.2s_ease-out]">
          THE TOOLS OF <br/>
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-champagne-gold to-[#e6d0a3]">CREATION.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mt-8 text-muted-text text-lg md:text-xl font-light leading-relaxed animate-[fadeInUp_1.4s_ease-out]">
          From legendary large-format analog consoles to the rarest vintage tube microphones, our collection is curated to capture every sonic nuance with absolute perfection.
        </p>
      </div>
    </section>
  );
}
