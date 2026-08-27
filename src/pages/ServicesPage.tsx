import React, { useEffect } from 'react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesMarquee } from '../components/services/ServicesMarquee';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { ServicesWorkflow } from '../components/services/ServicesWorkflow';
import { StudioCTA } from '../components/studio/StudioCTA';

export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen selection:bg-champagne-gold/30 selection:text-white">
      <ServicesHero />
      <ServicesMarquee />
      <ServicesGrid />
      <ServicesWorkflow />
      {/* Reusing the StudioCTA as it perfectly fits for booking */}
      <StudioCTA />
    </div>
  );
}
