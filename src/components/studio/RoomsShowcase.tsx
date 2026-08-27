import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    id: "studio-a",
    name: "STUDIO A",
    subtitle: "THE FLAGSHIP TRACKING ROOM",
    description: "Designed for massive sound. Studio A features a 72-channel SSL Duality console and a live room capable of hosting a 30-piece orchestra. Perfect for full band tracking, string sections, and cinematic scoring.",
    image: "/studio_a_real.jpg",
    features: ["72-Channel SSL Console", "Yamaha C7 Grand Piano", "Main Wall Monitors", "Massive Live Room"],
    reverse: false
  },
  {
    id: "studio-b",
    name: "STUDIO B",
    subtitle: "THE ANALOG SUITE",
    description: "Intimate, warm, and highly focused. Studio B is centered around a vintage Neve console and an extensive collection of analog synthesizers and outboard gear. Ideal for vocal production, electronic music, and detailed mixing.",
    image: "/studio_b_real.jpg",
    features: ["Neve Analog Console", "Roland Jupiter-8", "Wood-paneled Acoustics", "Vintage Outboard Gear"],
    reverse: true
  },
  {
    id: "north-room",
    name: "THE NORTH ROOM",
    subtitle: "DOLBY ATMOS & IMMERSIVE AUDIO",
    description: "The future of spatial audio. The North Room is fully calibrated for 9.1.4 Dolby Atmos mixing, providing an unparalleled immersive listening environment with sleek, sci-fi neon aesthetics and an Avid S6 control surface.",
    image: "/studio_north_real.jpg",
    features: ["9.1.4 Dolby Atmos Array", "Avid S6 Control Surface", "Neon Ambient Lighting", "Immersive Audio Tuning"],
    reverse: false
  },
  {
    id: "writing-room",
    name: "THE WRITING ROOM",
    subtitle: "COZY PRODUCTION & VOCAL SUITE",
    description: "A comfortable, creative sanctuary. Featuring a soundproof vocal booth with a high-end tube mic, acoustic guitars, MIDI controllers, and a relaxing couch. The perfect environment for songwriting, Toplining, and intimate production sessions.",
    image: "/studio_writing_real.jpg",
    features: ["Soundproof Vocal Booth", "High-End Tube Microphone", "Dual Monitor Setup", "Creative Fairy Lights"],
    reverse: true
  }
];

export function RoomsShowcase() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto bg-background">
      <div className="text-center mb-12 sm:mb-24">
        <h2 className="text-xs sm:text-sm font-bold tracking-[0.3em] text-champagne-gold uppercase mb-3 sm:mb-4">The Spaces</h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white">WHERE IT HAPPENS</h3>
      </div>

      <div className="flex flex-col gap-16 sm:gap-32">
        {rooms.map((room) => (
          <div key={room.id} className={`flex flex-col ${room.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 sm:gap-12 lg:gap-24 items-center`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 group relative">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-2xl">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-10 lg:-right-10 w-2/3 h-2/3 border-b-2 border-r-2 border-champagne-gold/30 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 hidden md:block"></div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-muted-text uppercase mb-2 sm:mb-3">
                {room.subtitle}
              </span>
              <h4 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">
                {room.name}
              </h4>
              <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {room.description}
              </p>
              
              <ul className="space-y-2.5 sm:space-y-4 mb-6 sm:mb-10">
                {room.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium tracking-[0.1em] text-muted-text uppercase">
                    <div className="w-1.5 h-1.5 bg-champagne-gold rounded-full shrink-0"></div>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link to={`/book?room=${room.id}`} className="group flex items-center gap-2.5 sm:gap-3 text-xs font-bold tracking-[0.2em] text-champagne-gold uppercase transition-colors hover:text-white w-max">
                Book {room.name} <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
