import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: "01",
    title: "PRE-PRODUCTION",
    desc: "We discuss your vision, reference tracks, and technical requirements to ensure the session runs flawlessly."
  },
  {
    number: "02",
    title: "EXECUTION",
    desc: "Whether tracking or mixing, we utilize our world-class gear and acoustic spaces to capture and shape your sound."
  },
  {
    number: "03",
    title: "DELIVERY",
    desc: "You receive high-resolution files perfectly optimized for streaming platforms, vinyl pressing, or cinematic release."
  }
];

export function ServicesWorkflow() {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="lg:w-1/3">
            <h2 className="text-xs font-bold tracking-[0.3em] text-champagne-gold uppercase mb-6">The Approach</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
              FROM VISION <br/> TO REALITY.
            </h3>
            <p className="text-muted-text text-lg mb-10">
              We believe in a tailored approach for every artist. Our workflow is designed to remove technical barriers so you can focus purely on your creative performance.
            </p>
            <Link to="/contact" className="px-10 py-5 bg-champagne-gold text-background font-bold text-sm tracking-[0.2em] uppercase hover:bg-warm-highlight transition-colors duration-300 inline-block">
              Request a Quote
            </Link>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="border-t border-white/20 pt-8 group">
                <span className="text-4xl font-serif text-champagne-gold opacity-50 group-hover:opacity-100 transition-opacity duration-300 block mb-6">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold tracking-[0.1em] text-white uppercase mb-4">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-text leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
