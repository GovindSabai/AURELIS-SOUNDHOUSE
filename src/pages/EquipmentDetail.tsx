import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EQUIPMENT_DATA } from '../data/equipment';

export function EquipmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const equipment = EQUIPMENT_DATA.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!equipment) {
    return (
      <div className="bg-background min-h-screen pt-32 pb-24 text-white text-center">
        <h1 className="text-4xl text-[#F2E8C6]">Equipment not found</h1>
        <button onClick={() => navigate('/equipment')} className="mt-8 text-white/50 hover:text-white">&larr; BACK TO EQUIPMENT</button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <button 
          onClick={() => navigate(-1)}
          className="text-white/50 hover:text-white text-sm tracking-widest uppercase mb-16 transition-colors"
        >
          &larr; BACK
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={equipment.image} 
              alt={equipment.equipment} 
              className="w-full aspect-[4/5] object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] text-[#F2E8C6] mb-4 uppercase">{equipment.name}</p>
            <h1 className="text-5xl font-serif text-white mb-6">{equipment.equipment}</h1>
            <p className="text-sm tracking-[0.2em] text-white/50 mb-8 uppercase">{equipment.description}</p>
            
            <div className="h-[1px] w-16 bg-[#F2E8C6] mb-8" />
            
            <p className="text-lg text-white/70 leading-relaxed mb-8 font-light">
              {equipment.longDescription}
            </p>
            
            <p className="text-xs tracking-[0.3em] text-[#F2E8C6] uppercase font-bold">
              CHARACTER: {equipment.character}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
