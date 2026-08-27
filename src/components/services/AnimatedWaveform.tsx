import React from 'react';

// Pre-defined patterns to give distinct "vibes" to each service type
const patterns = {
  recording: [20, 40, 30, 80, 50, 20, 10, 60, 90, 40, 30, 10, 50, 70, 40, 20, 10, 30, 80, 50, 20, 40, 60, 30],
  mixing:    [40, 50, 60, 50, 40, 80, 90, 100, 80, 50, 40, 30, 40, 60, 70, 60, 40, 30, 50, 80, 60, 40, 30, 50],
  mastering: [80, 85, 90, 85, 80, 95, 100, 95, 85, 80, 75, 80, 90, 95, 90, 85, 80, 85, 95, 100, 95, 85, 80, 85],
  'sound-design': [10, 100, 20, 80, 30, 90, 10, 60, 100, 20, 50, 10, 90, 30, 80, 20, 100, 10, 40, 90, 20, 70, 10, 50]
};

export function AnimatedWaveform({ type }: { type: string }) {
  // Fallback to recording if type doesn't exist
  const basePattern = patterns[type as keyof typeof patterns] || patterns.recording;
  
  // Create a long array for continuous smooth scrolling
  const fullPattern = [...basePattern, ...basePattern, ...basePattern, ...basePattern, ...basePattern];

  return (
    <div className="w-full py-12 flex flex-col items-center overflow-hidden border-y border-white/5 bg-background-secondary my-16">
      <span className="text-[10px] font-bold tracking-[0.3em] text-champagne-gold uppercase mb-8">
        Studio Monitoring Signal
      </span>
      
      <div className="relative w-full max-w-4xl h-32 flex items-end overflow-hidden">
        {/* The horizontal baseline */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne-gold/30"></div>
        
        {/* The moving waveform */}
        <div className="flex items-end gap-1 h-full w-max animate-marquee pb-[1px]">
          {fullPattern.map((height, i) => (
            <div 
              key={i}
              className="w-2 md:w-3 bg-champagne-gold/40 rounded-t-sm"
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
