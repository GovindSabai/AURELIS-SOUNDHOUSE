import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { ArrowRight } from 'lucide-react';

export function ServicesGrid() {
  return (
    <section className="py-32 px-6 max-w-[1400px] mx-auto bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {servicesData.map((service, index) => (
          <Link to={`/services/${service.id}`} key={service.id} className="group relative bg-background-secondary rounded-sm overflow-hidden border border-border flex flex-col hover:border-champagne-gold/50 transition-colors duration-500 cursor-pointer block">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col flex-grow">
              <span className="text-xs font-bold tracking-[0.3em] text-champagne-gold uppercase mb-4">
                Service 0{index + 1}
              </span>
              <h3 className="text-3xl font-serif text-white mb-6">
                {service.title}
              </h3>
              <p className="text-muted-text leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto mb-10">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold tracking-[0.1em] px-3 py-1 bg-white/5 text-primary-text border border-white/10 uppercase rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Explore Service Button inside card */}
              <div className="border-t border-white/10 pt-6 flex items-center justify-between text-champagne-gold group-hover:text-white transition-colors">
                 <span className="text-xs font-bold tracking-[0.2em] uppercase">Explore Service</span>
                 <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
