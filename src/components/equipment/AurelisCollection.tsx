import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EQUIPMENT_DATA } from '../../data/equipment';

export function AurelisCollection() {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium tracking-[0.3em] text-white/50 mb-4">THE AURELIS COLLECTION</h2>
          <h3 className="text-3xl font-serif text-[#F2E8C6]">Signature Equipment</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EQUIPMENT_DATA.map((item) => (
            <div 
              key={item.id}
              onClick={() => navigate(`/equipment/${item.id}`)}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-black/50 border border-white/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.equipment}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                <div className="text-xs font-serif text-white/40 group-hover:text-[#F2E8C6] transition-colors duration-300">
                  {item.id}
                </div>
                
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-serif text-white mb-2">{item.equipment}</h4>
                  
                  {/* Category - Appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-[10px] tracking-[0.2em] text-[#F2E8C6] uppercase mb-4">{item.name}</p>
                    
                    {/* Gold line expands */}
                    <div className="w-0 group-hover:w-12 h-[1px] bg-[#F2E8C6] mb-4 transition-all duration-500 delay-200" />
                    
                    <p className="text-xs tracking-widest text-white uppercase group-hover:text-[#F2E8C6] transition-colors duration-300">
                      VIEW DETAILS &rarr;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
