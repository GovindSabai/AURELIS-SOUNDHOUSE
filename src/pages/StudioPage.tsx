import React, { useEffect } from 'react';
import { StudioHero } from '../components/studio/StudioHero';
import { FacilitiesMarquee } from '../components/studio/FacilitiesMarquee';
import { RoomsShowcase } from '../components/studio/RoomsShowcase';
import { ReviewsMarquee } from '../components/studio/ReviewsMarquee';
import { StudioCTA } from '../components/studio/StudioCTA';

export function StudioPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen selection:bg-champagne-gold/30 selection:text-white">
      <StudioHero />
      <FacilitiesMarquee />
      <RoomsShowcase />
      <ReviewsMarquee />
      <StudioCTA />
    </div>
  );
}
