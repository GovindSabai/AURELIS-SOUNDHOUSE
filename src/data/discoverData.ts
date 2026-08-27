export type DiscoverType = 'Artist' | 'Project' | 'Session' | 'Story' | 'Studio' | 'Release';

export interface AurelisItem {
  id: string;
  type: DiscoverType;
  title: string;
  artist: string;
  category: string;
  genre: string;
  description: string;
  image: string;
  year?: string;
  services?: string[];
  featured?: boolean;
  trending?: boolean;
  relatedIds?: string[];
  tags?: string[];
}

export const projectsData: AurelisItem[] = [
  {
    id: "p1",
    type: "Project",
    title: "MIDNIGHT AFTERGLOW",
    artist: "Aria Noir",
    category: "Featured",
    genre: "Electronic",
    description: "A late-night production built around analog textures, layered vocals and cinematic synths. Recorded in Studio A using classic tape delays.",
    image: "/pack_cover_1_1787640848563.jpg",
    year: "2026",
    services: ["Recording", "Production", "Mixing"],
    featured: true,
    trending: true,
    tags: ["Late Night", "Raw & Analog"]
  },
  {
    id: "p2",
    type: "Project",
    title: "NEON RAIN",
    artist: "Luna Rey",
    category: "Project",
    genre: "R&B",
    description: "A smooth, immersive journey blending contemporary R&B with 80s synthwave aesthetics.",
    image: "/project_cover_2_1787639325831.jpg",
    year: "2026",
    services: ["Vocal Production", "Mixing"],
    featured: false,
    trending: true,
    tags: ["Vocal Sessions", "Late Night"]
  },
  {
    id: "p3",
    type: "Project",
    title: "GLASS ROOMS",
    artist: "Marcus Vale",
    category: "Project",
    genre: "Alternative",
    description: "An introspective acoustic album captured entirely live in Studio B to preserve the natural room reverberation.",
    image: "/pack_cover_2_1787640975758.jpg",
    year: "2025",
    services: ["Recording", "Mastering"],
    featured: false,
    trending: false,
    tags: ["Live at Aurelis", "Raw & Analog"]
  },
  {
    id: "p4",
    type: "Project",
    title: "SILENCE IN MOTION",
    artist: "Nova Saint",
    category: "Project",
    genre: "Cinematic",
    description: "A sprawling orchestral and synthetic score for an upcoming independent film, mixed in Dolby Atmos.",
    image: "/project_cover_1_1787639273921.jpg",
    year: "2026",
    services: ["Production", "Mixing", "Mastering"],
    featured: true,
    trending: true,
    tags: ["Late Night"]
  },
  {
    id: "p5",
    type: "Project",
    title: "THE NORTH ROOM",
    artist: "The North Room",
    category: "Project",
    genre: "Rock",
    description: "Gritty, analog-heavy indie rock recorded straight to 2-inch tape for maximum warmth and punch.",
    image: "/cross_platform_mockup_1787636556562.jpg",
    year: "2025",
    services: ["Recording", "Mixing"],
    featured: false,
    trending: false,
    tags: ["Live at Aurelis", "Raw & Analog"]
  },
  {
    id: "p6",
    type: "Project",
    title: "ECHOES OF JAZZ",
    artist: "Elias Grey",
    category: "Project",
    genre: "Jazz",
    description: "A modern jazz quartet session focusing on improvisation and tight grooves, captured with vintage microphones.",
    image: "/sound_card_drums_1787634368168.jpg",
    year: "2026",
    services: ["Recording", "Mastering"],
    featured: false,
    trending: true,
    tags: ["Live at Aurelis"]
  },
  {
    id: "p7",
    type: "Project",
    title: "SYNTHESIS",
    artist: "Aria Noir",
    category: "Project",
    genre: "Electronic",
    description: "An exploration of modular synthesis and generative sequencing, built over a weekend lock-in.",
    image: "/sound_card_synth_1787634384820.jpg",
    year: "2025",
    services: ["Production"],
    featured: false,
    trending: false,
    tags: ["Raw & Analog", "After Hours"]
  },
  {
    id: "p8",
    type: "Project",
    title: "DRIFTWOOD",
    artist: "Luna Rey",
    category: "Project",
    genre: "Acoustic",
    description: "Intimate vocal and acoustic guitar arrangements focused on lyrical storytelling.",
    image: "/pack_cover_1_1787640848563.jpg",
    year: "2024",
    services: ["Recording", "Vocal Production"],
    featured: false,
    trending: false,
    tags: ["Vocal Sessions"]
  },
  {
    id: "p9",
    type: "Project",
    title: "URBAN PULSE",
    artist: "Marcus Vale",
    category: "Project",
    genre: "Hip-Hop",
    description: "Hard-hitting drums and saturated basslines, mixed on the analog console for maximum impact.",
    image: "/project_cover_2_1787639325831.jpg",
    year: "2026",
    services: ["Mixing", "Mastering"],
    featured: false,
    trending: true,
    tags: ["Late Night"]
  },
  {
    id: "p10",
    type: "Project",
    title: "AMBIENT WAVES",
    artist: "Nova Saint",
    category: "Project",
    genre: "Cinematic",
    description: "Deep, evolving soundscapes designed for meditation and focus, utilizing extensive outboard reverb.",
    image: "/pack_cover_2_1787640975758.jpg",
    year: "2025",
    services: ["Production", "Mixing"],
    featured: false,
    trending: false,
    tags: ["After Hours"]
  },
  {
    id: "p11",
    type: "Project",
    title: "SUMMER NIGHTS",
    artist: "The North Room",
    category: "Project",
    genre: "Pop",
    description: "Upbeat, radio-ready pop anthems featuring bright vocals and polished synthetic production.",
    image: "/project_cover_1_1787639273921.jpg",
    year: "2026",
    services: ["Recording", "Production", "Mixing", "Mastering"],
    featured: true,
    trending: true,
    tags: ["Vocal Sessions"]
  },
  {
    id: "p12",
    type: "Project",
    title: "BROKEN CLOCKS",
    artist: "Elias Grey",
    category: "Project",
    genre: "R&B",
    description: "A neo-soul influenced project highlighting Rhodes piano, tight drums, and complex vocal harmonies.",
    image: "/cross_platform_mockup_1787636556562.jpg",
    year: "2025",
    services: ["Recording", "Mixing"],
    featured: false,
    trending: false,
    tags: ["Late Night", "Raw & Analog"]
  }
];

export const artistsData: AurelisItem[] = [
  {
    id: "a1",
    type: "Artist",
    title: "Aria Noir",
    artist: "Aria Noir",
    category: "Artist",
    genre: "Electronic",
    description: "A visionary electronic producer known for blending analog textures with cutting-edge sound design. Her work pushes the boundaries of ambient and dance music.",
    image: "/aurelis_mockup.jpg",
    featured: true,
    tags: []
  },
  {
    id: "a2",
    type: "Artist",
    title: "Marcus Vale",
    artist: "Marcus Vale",
    category: "Artist",
    genre: "Alternative",
    description: "An alternative singer-songwriter whose raw, emotive vocal performances are matched only by his intricate production skills.",
    image: "/cross_platform_mockup_1787636556562.jpg",
    featured: false,
    tags: []
  },
  {
    id: "a3",
    type: "Artist",
    title: "Luna Rey",
    artist: "Luna Rey",
    category: "Artist",
    genre: "R&B",
    description: "Rising R&B star Luna Rey brings a classic soul sensibility to modern pop production.",
    image: "/pack_cover_1_1787640848563.jpg",
    featured: true,
    tags: []
  },
  {
    id: "a4",
    type: "Artist",
    title: "The North Room",
    artist: "The North Room",
    category: "Artist",
    genre: "Rock",
    description: "A four-piece indie rock outfit known for their explosive live shows and analog-first recording philosophy.",
    image: "/pack_cover_2_1787640975758.jpg",
    featured: false,
    tags: []
  },
  {
    id: "a5",
    type: "Artist",
    title: "Elias Grey",
    artist: "Elias Grey",
    category: "Artist",
    genre: "Jazz",
    description: "A contemporary jazz pianist and composer bridging the gap between traditional trio formats and modern production.",
    image: "/sound_card_drums_1787634368168.jpg",
    featured: false,
    tags: []
  },
  {
    id: "a6",
    type: "Artist",
    title: "Nova Saint",
    artist: "Nova Saint",
    category: "Artist",
    genre: "Cinematic",
    description: "Composer and sound designer creating massive orchestral and synthetic hybrid scores for film and interactive media.",
    image: "/sound_card_synth_1787634384820.jpg",
    featured: false,
    tags: []
  }
];

export const allDiscoverData = [...projectsData, ...artistsData];

export const collectionsData = [
  { id: "c1", title: "LATE NIGHT", tags: ["Late Night"], description: "Dark · Atmospheric · Cinematic", image: "/project_cover_2_1787639325831.jpg" },
  { id: "c2", title: "RAW & ANALOG", tags: ["Raw & Analog"], description: "Tape · Hardware · Warmth", image: "/pack_cover_1_1787640848563.jpg" },
  { id: "c3", title: "VOCAL SESSIONS", tags: ["Vocal Sessions"], description: "Intimate · Human · Detailed", image: "/cross_platform_mockup_1787636556562.jpg" },
  { id: "c4", title: "LIVE AT AURELIS", tags: ["Live at Aurelis"], description: "Performance · Energy · Room Sound", image: "/pack_cover_2_1787640975758.jpg" },
  { id: "c5", title: "AFTER HOURS", tags: ["After Hours"], description: "Electronic · Experimental · Ambient", image: "/sound_card_synth_1787634384820.jpg" }
];
