import React, { useEffect } from 'react';
import { EquipmentHero } from '../components/equipment/EquipmentHero';
import { EquipmentExplorer } from '../components/equipment/EquipmentExplorer';
import { SignalChain } from '../components/equipment/SignalChain';
import { AurelisCollection } from '../components/equipment/AurelisCollection';
import { StudioCTA } from '../components/studio/StudioCTA';

export function EquipmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen selection:bg-champagne-gold/30 selection:text-white">
      <EquipmentHero />
      <EquipmentExplorer />
      <SignalChain />
      <AurelisCollection />
      <StudioCTA />
    </div>
  );
}
