import React from 'react';

export function ServicesHero() {
  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne-gold/10 via-background to-background"></div>

      <div className="relative z-10 text-center px-6 mt-40">
        <span className="text-xs font-bold tracking-[0.4em] text-champagne-gold uppercase block mb-6 animate-[fadeInUp_1s_ease-out]">
          Aurelis Soundhouse
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight animate-[fadeInUp_1.2s_ease-out]">
          UNCOMPROMISED <br/>
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-champagne-gold to-[#e6d0a3]">PRODUCTION.</span>
        </h1>
        <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto animate-[fadeInUp_1.4s_ease-out]">
          End-to-end audio services designed to elevate your sound. From tracking your first vocal to mastering for global streaming.
        </p>
      </div>

      <div className="absolute bottom-10 left-6 md:left-10 flex flex-col items-center animate-bounce text-muted-text">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-[1px] h-12 bg-champagne-gold/50 mt-2"></div>
      </div>
    </section>
  );
}
