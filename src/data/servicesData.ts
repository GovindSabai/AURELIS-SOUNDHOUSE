export type ServiceDetailType = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  fullDetails: {
    heroTitle: string;
    heroSubtitle: string;
    longDescription: string;
    gearList: string[];
    process: { step: string; detail: string }[];
  }
};

export const servicesData: ServiceDetailType[] = [
  {
    id: "recording",
    title: "RECORDING",
    description: "Capture every nuance with pristine clarity. Our live rooms are acoustically treated for perfection, and we boast a world-class collection of vintage tube microphones and modern preamps. Perfect for vocalists, full bands, and orchestral tracking.",
    image: "/service_recording.jpg",
    tags: ["Vocal Production", "Band Tracking", "Orchestral Scoring"],
    fullDetails: {
      heroTitle: "CAPTURE THE ESSENCE.",
      heroSubtitle: "PRISTINE TRACKING & VOCAL PRODUCTION",
      longDescription: "Our recording environments are designed to inspire the best performances. Whether you're tracking an intimate solo vocal or a sprawling 30-piece string section, our acoustically treated spaces ensure zero phase cancellation and ultimate clarity. Combined with our legendary mic locker, we guarantee a sound that is both massive and intimately detailed.",
      gearList: ["Neumann U47 (Vintage)", "Telefunken ELA M 251", "Sony C-800G", "Neve 1073 Preamps", "Tube-Tech CL 1B", "Yamaha C7 Grand Piano"],
      process: [
        { step: "Session Prep", detail: "We set up microphones and dial in monitor mixes before you even arrive." },
        { step: "Tracking", detail: "Focused tracking sessions prioritizing vibe, tone, and emotional delivery." },
        { step: "Comping", detail: "Meticulous vocal and instrument comping to build the perfect composite take." }
      ]
    }
  },
  {
    id: "mixing",
    title: "MIXING",
    description: "Bring depth, punch, and clarity to your tracks. Our engineers specialize in hybrid mixing—combining the surgical precision of modern digital tools with the unmatched warmth and character of our large-format analog consoles.",
    image: "/service_mixing.jpg",
    tags: ["Analog & Digital Hybrid", "Stem Mixing", "Vocal Tuning"],
    fullDetails: {
      heroTitle: "SHAPE THE SONICS.",
      heroSubtitle: "HYBRID ANALOG & DIGITAL MIXING",
      longDescription: "A great mix brings a track to life. We specialize in hybrid mixing, leveraging the surgical precision of modern digital EQs alongside the undeniable width, punch, and harmonic richness of our large-format SSL and Neve consoles. Every stem is treated with care to create a massive, three-dimensional soundscape.",
      gearList: ["72-Channel SSL Duality", "Neve 5088 Analog Console", "Lexicon 480L Reverb", "Bricasti M7", "Empirical Labs Distressors", "UAD Ultimate Plug-in Bundle"],
      process: [
        { step: "Organization", detail: "Session cleanup, stem routing, and phase alignment." },
        { step: "Analog Summing", detail: "Routing tracks through our consoles and outboard gear for harmonic saturation." },
        { step: "Revisions", detail: "Collaborative revision rounds to ensure the mix perfectly matches your vision." }
      ]
    }
  },
  {
    id: "mastering",
    title: "MASTERING",
    description: "The final polish. We ensure your music translates perfectly across all playback systems. Using premium outboard EQs and limiters, we provide competitive loudness while preserving dynamic range and emotional impact.",
    image: "/service_mastering.jpg",
    tags: ["Streaming Optimization", "Vinyl Mastering", "DDP Creation"],
    fullDetails: {
      heroTitle: "THE FINAL POLISH.",
      heroSubtitle: "ANALYTICAL & MUSICAL MASTERING",
      longDescription: "Mastering is the crucial final step before the world hears your music. Our mastering suite is a hyper-accurate acoustic environment where we use world-class analog EQs and mastering compressors to give your track competitive loudness, incredible depth, and perfect translation across club systems, car stereos, and AirPods.",
      gearList: ["Manley Massive Passive EQ", "Shadow Hills Mastering Compressor", "Weiss EQ1", "Lavry Gold Converters", "ATC SCM150ASL Monitors"],
      process: [
        { step: "Critical Listening", detail: "Analyzing the mix for frequency imbalances and dynamic inconsistencies." },
        { step: "Analog Processing", detail: "Applying broad, musical EQ and transparent limiting to enhance the mix." },
        { step: "Format Delivery", detail: "Exporting optimized masters for Spotify, Apple Music, Vinyl, and CD." }
      ]
    }
  },
  {
    id: "sound-design",
    title: "SOUND DESIGN & PRODUCTION",
    description: "From custom synthesizer patches to full electronic production and cinematic scoring. We help you build your sonic identity using our extensive collection of vintage analog synths and modern modular rigs.",
    image: "/service_sound_design.jpg",
    tags: ["Synthesizer Programming", "Beat Production", "Film Scoring"],
    fullDetails: {
      heroTitle: "BUILD YOUR UNIVERSE.",
      heroSubtitle: "SYNTHESIS, SCORING & PRODUCTION",
      longDescription: "Sound design is about creating textures and elements that have never been heard before. Whether you're an electronic artist looking for a signature bass patch or a filmmaker needing an immersive, otherworldly score, our production room offers unlimited sonic possibilities through our massive modular arrays and vintage synths.",
      gearList: ["Roland Jupiter-8", "Moog One", "Sequential Prophet-5", "Eurorack Modular System", "Elektron Octatrack", "Focal Trio11 Be Monitors"],
      process: [
        { step: "Concept & Palette", detail: "Defining the sonic aesthetic and generating core patches and textures." },
        { step: "Arrangement", detail: "Structuring the sounds into a cohesive musical or cinematic narrative." },
        { step: "Final Delivery", detail: "Providing stems, MIDI, and mixed audio for seamless integration into your project." }
      ]
    }
  }
];
