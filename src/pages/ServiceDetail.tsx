import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { StudioCTA } from '../components/studio/StudioCTA';
import { AnimatedWaveform } from '../components/services/AnimatedWaveform';

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen selection:bg-champagne-gold/30 selection:text-white">
      
      {/* Top Header Space & Back Button */}
      <div className="pt-40 pb-12 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-muted-text hover:text-white transition-colors">
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>

      {/* Image Section */}
      <section className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto mb-16">
        <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden rounded-sm">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover animate-[slowZoom_20s_ease-out_forwards]"
          />
        </div>
      </section>

      {/* Heading Section */}
      <section className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto mb-8">
        <span className="text-sm font-bold tracking-[0.4em] text-champagne-gold uppercase block mb-4">
          {service.fullDetails.heroSubtitle}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight tracking-tight">
          {service.fullDetails.heroTitle}
        </h1>
      </section>

      {/* Animated Waveform Signature */}
      <AnimatedWaveform type={service.id} />

      {/* Content Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Main Description */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-6">About the Service</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {service.fullDetails.longDescription}
            </p>

            <div className="mt-16">
              <h2 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-6">The Process</h2>
              <div className="space-y-8">
                {service.fullDetails.process.map((p, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="text-champagne-gold font-serif text-2xl">0{idx + 1}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-2">{p.step}</h4>
                      <p className="text-muted-text leading-relaxed">{p.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Gear List */}
          <div className="lg:w-1/3">
            <div className="bg-background-secondary border border-border p-8 rounded-sm sticky top-32">
              <h3 className="text-sm font-bold tracking-[0.2em] text-champagne-gold uppercase mb-8">Featured Equipment</h3>
              <ul className="space-y-4">
                {service.fullDetails.gearList.map((gear, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-champagne-gold shrink-0 mt-0.5" />
                    <span className="leading-tight">{gear}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                 <Link to="/book" className="w-full block text-center px-6 py-4 bg-white text-background font-bold text-xs tracking-[0.2em] uppercase hover:bg-champagne-gold hover:text-white transition-colors">
                   Book This Service
                 </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reusing CTA */}
      <StudioCTA />
    </div>
  );
}
