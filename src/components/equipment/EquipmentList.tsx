import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const fullInventory = [
  {
    category: "Microphones - Tube & Condenser",
    items: [
      "2x Neumann U47 (Vintage)",
      "1x Neumann U67 (Original)",
      "2x Telefunken ELA M 251E",
      "4x Neumann U87 Ai",
      "2x AKG C12",
      "2x Sony C-800G"
    ]
  },
  {
    category: "Microphones - Ribbon & Dynamic",
    items: [
      "4x Coles 4038",
      "2x Royer R-121",
      "2x AEA R84",
      "6x Shure SM7B",
      "10x Shure SM57",
      "2x Electro-Voice RE20"
    ]
  },
  {
    category: "Dynamics & EQs",
    items: [
      "2x Tube-Tech CL 1B",
      "2x Universal Audio Teletronix LA-2A",
      "2x Urei 1176LN (Rev D)",
      "1x SSL G Series Bus Compressor",
      "2x Pultec EQP-1A",
      "1x Manley Massive Passive"
    ]
  },
  {
    category: "Monitoring & Converters",
    items: [
      "ATC SCM150ASL Pro (Mains)",
      "Yamaha NS-10M Studio",
      "Focal Trio11 Be",
      "Burl Audio B80 Mothership",
      "Lavry Engineering AD122-96 MX",
      "Dangerous Music Monitor ST"
    ]
  }
];

export function EquipmentList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1000px] mx-auto bg-background">
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.4em] text-champagne-gold uppercase block mb-4">
          Complete Roster
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-white">Full Inventory</h2>
      </div>

      <div className="space-y-4">
        {fullInventory.map((section, index) => (
          <div 
            key={index} 
            className="border border-white/10 bg-background-secondary rounded-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl font-serif text-white">{section.category}</h3>
              {openIndex === index ? (
                <Minus size={20} className="text-champagne-gold" />
              ) : (
                <Plus size={20} className="text-muted-text" />
              )}
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-6 pt-0 border-t border-white/5 mt-2">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-300 font-light flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-champagne-gold/50 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
