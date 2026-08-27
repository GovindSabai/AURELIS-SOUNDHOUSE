import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHAINS = {
  VOCALS: [
    { role: 'MICROPHONE', gear: 'TELEFUNKEN U67' },
    { role: 'PREAMP', gear: 'NEVE 1073' },
    { role: 'COMPRESSOR', gear: 'UNIVERSAL AUDIO 1176' },
    { role: 'CONVERTER', gear: 'APOGEE SYMPHONY' },
    { role: 'DAW', gear: 'PRO TOOLS / LOGIC' },
  ],
  DRUMS: [
    { role: 'MICROPHONES', gear: 'COLES 4038 (OH) + SM57' },
    { role: 'PREAMP', gear: 'API 3124' },
    { role: 'COMPRESSOR', gear: 'EMPIRICAL LABS DISTRESSOR' },
    { role: 'CONVERTER', gear: 'APOGEE SYMPHONY' },
    { role: 'DAW', gear: 'PRO TOOLS / LOGIC' },
  ]
};

export function SignalChain() {
  const [activeChain, setActiveChain] = useState<'VOCALS' | 'DRUMS'>('VOCALS');
  const chain = CHAINS[activeChain];

  return (
    <section className="py-32 bg-black text-ivory border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-xs tracking-[0.3em] text-[#F2E8C6] mb-4">WHAT ARE YOU RECORDING?</h2>
          <div className="flex justify-center gap-8 mt-12">
            {(['VOCALS', 'DRUMS'] as const).map((role) => (
              <button
                key={role}
                onClick={() => setActiveChain(role)}
                className={`text-xl font-serif tracking-widest transition-all duration-300 ${
                  activeChain === role ? 'text-white border-b-2 border-[#F2E8C6] pb-2' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center max-w-lg mx-auto">
          {/* The traveling animated line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#F2E8C6] to-transparent z-0"
            animate={{
              top: ['-10%', '110%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {chain.map((step, index) => (
            <div key={`${activeChain}-${index}`} className="relative z-10 w-full flex flex-col items-center mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-black border border-white/20 px-12 py-6 min-w-[300px] text-center backdrop-blur-sm"
              >
                <div className="text-[10px] tracking-[0.3em] text-white/50 mb-3">{step.role}</div>
                <div className="font-serif text-xl tracking-wide text-[#F2E8C6]">{step.gear}</div>
              </motion.div>
              
              {index < chain.length - 1 && (
                <div className="h-16 flex items-center justify-center text-white/30 text-xs my-2">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
