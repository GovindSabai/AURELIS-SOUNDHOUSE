import React, { useState, useEffect } from 'react';

export function StudioHero() {
  const fullText = "THE SOUND HOUSE";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 30 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text.length === 0) {
        setTimeout(() => setIsDeleting(false), 500);
      } else {
        setText(prev => fullText.slice(0, prev.length + (isDeleting ? -1 : 1)));
      }
    }, speed);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  const renderText = (currentText: string) => {
    const part1 = currentText.substring(0, 4);
    const part2 = currentText.substring(4, 9);
    const part3 = currentText.substring(9);
    
    return (
      <>
        {part1}
        {part2 && <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-champagne-gold to-[#e6d0a3]">{part2}</span>}
        {part3 && <><br />{part3.substring(1)}</>}
        <span className="animate-pulse opacity-50">|</span>
      </>
    );
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Dark gradient background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1814] via-background to-background"></div>

      <div className="relative z-10 text-center px-6 mt-20 min-h-[250px] flex flex-col items-center justify-center">
        <span className="text-xs font-bold tracking-[0.4em] text-champagne-gold uppercase block mb-6 animate-[fadeInUp_1s_ease-out]">
          Welcome to Aurelis
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-none tracking-tight animate-[fadeInUp_1.2s_ease-out]">
          {renderText(text)}
        </h1>
        <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto animate-[fadeInUp_1.4s_ease-out]">
          A world-class environment designed for uncompromised creative vision. Analog warmth meets modern precision.
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-text">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-champagne-gold/50"></div>
      </div>
    </section>
  );
}
