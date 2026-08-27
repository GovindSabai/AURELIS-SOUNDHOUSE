import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EQUIPMENT_DATA } from '../../data/equipment';

export function EquipmentExplorer() {
  const [activeCategory, setActiveCategory] = useState(EQUIPMENT_DATA[0]);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Navigate to a details page based on the active category equipment name or ID
    navigate(`/equipment/${activeCategory.id}`);
  };

  return (
    <section className="py-24 bg-background text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 min-h-[600px]">
          
          {/* Left Side: Categories */}
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <h2 className="text-sm font-medium tracking-widest text-white/50 mb-12">EQUIPMENT EXPLORER</h2>
            <div className="flex flex-col space-y-6">
              {EQUIPMENT_DATA.map((cat) => {
                const isActive = activeCategory.id === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat)}
                    className={`group relative flex items-center text-left transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    <span className="font-serif text-xl tracking-wide w-12">{cat.id}</span>
                    <span className="text-lg tracking-widest uppercase">{cat.name}</span>
                    
                    {/* Expanding Gold Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryLine"
                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-[2px] h-full bg-[#F2E8C6]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Image and Details */}
          <div className="w-full md:w-2/3 relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-[600px] flex items-center justify-center group cursor-pointer"
                onClick={handleViewDetails}
              >
                {/* Large Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-700" />
                  <img 
                    src={activeCategory.image} 
                    alt={activeCategory.equipment}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                {/* Details Overlay */}
                <div className="relative z-20 text-center flex flex-col items-center p-8">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-serif text-[#F2E8C6] mb-4 tracking-wide"
                  >
                    {activeCategory.equipment}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-sm tracking-[0.2em] text-white/70 mb-8 uppercase"
                  >
                    {activeCategory.description}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xs tracking-[0.3em] font-medium text-white/50 mb-8"
                  >
                    {activeCategory.character}
                  </motion.p>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#F2E8C6] hover:text-black transition-colors duration-300"
                  >
                    VIEW DETAILS &rarr;
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
