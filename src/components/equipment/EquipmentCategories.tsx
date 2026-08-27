import React from 'react';

const categories = [
  {
    title: "Microphones",
    description: "Our locker boasts over 100 microphones, including original vintage tube models, immaculate ribbons, and precision modern condensers for uncolored capture.",
    image: "/eq_mics_1787660300374.jpg",
    highlights: ["Neumann U47 (Vintage Tube)", "Telefunken ELA M 251", "Coles 4038 Pair", "Sony C800G"]
  },
  {
    title: "Consoles & Preamps",
    description: "The heart of our tracking rooms. We rely on large-format analog consoles known for their unparalleled headroom, musical EQ, and legendary punch.",
    image: "/eq_consoles_1787660318712.jpg",
    highlights: ["72-Channel SSL Duality Delta", "Vintage Neve 8068", "API 3124+ Quad Preamps", "Chandler Limited TG2"]
  },
  {
    title: "Instruments & Synths",
    description: "A producer's paradise. We maintain a pristine collection of analog synthesizers, drum machines, and acoustic instruments to spark immediate inspiration.",
    image: "/eq_instruments_1787660333188.jpg",
    highlights: ["Roland Jupiter-8", "Moog Minimoog Voyager", "Yamaha C7 Grand Piano", "Fender Rhodes Mark I"]
  },
  {
    title: "Outboard & Digital",
    description: "Surgical precision meets analog warmth. Racks filled with industry-standard compressors and EQs, backed by ultra-low jitter mastering converters.",
    image: "/eq_outboard_1787660356649.jpg",
    highlights: ["Tube-Tech CL 1B", "Manley Massive Passive", "Bricasti M7 Reverb", "Lavry Gold Converters"]
  }
];

export function EquipmentCategories() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {categories.map((cat, index) => (
          <div key={index} className="group relative bg-background-secondary rounded-sm overflow-hidden border border-border flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col flex-grow">
              <h3 className="text-3xl font-serif text-white mb-6">
                {cat.title}
              </h3>
              <p className="text-muted-text leading-relaxed mb-8">
                {cat.description}
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-champagne-gold uppercase block mb-4">
                  Notable Pieces
                </span>
                <ul className="space-y-2">
                  {cat.highlights.map((item, i) => (
                    <li key={i} className="text-sm text-gray-300 font-light flex items-center gap-2">
                      <span className="w-1 h-1 bg-champagne-gold rounded-full"></span>
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
