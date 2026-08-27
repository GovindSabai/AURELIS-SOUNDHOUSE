export interface Project {
  id: string;
  slug: string;
  title: string;
  artist: string;
  genre: string;
  year: number;
  type: string;
  services: string[];
  image: string;
  description: string;
  equipment: string[];
  credits: {
    artist: string;
    producer: string;
    engineer: string;
    mix: string;
    mastering: string;
    recordedAt: string;
  };
  audio?: {
    title: string;
    artist: string;
    url: string;
    duration: string;
  };
  gallery: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "proj_01",
    slug: "midnight-afterglow",
    title: "Midnight Afterglow",
    artist: "Nova Ray",
    genre: "Electronic",
    year: 2026,
    type: "Production",
    services: ["Production", "Recording", "Mixing"],
    image: "/images/projects/proj_01_synth_1787739109863.jpg",
    description: "A deep dive into synth-heavy textures and pulsing rhythms. The goal was to create an immersive, late-night atmosphere that felt both nostalgic and fiercely futuristic.",
    equipment: ["Neve 8068 Console", "Roland Jupiter-8", "Teletronix LA-2A", "Moog Sub 37"],
    credits: {
      artist: "Nova Ray",
      producer: "Alex Vance (Aurelis)",
      engineer: "Sarah Jenkins",
      mix: "Alex Vance",
      mastering: "Studio A Mastering",
      recordedAt: "Aurelis Studio A"
    },
    audio: {
      title: "Midnight Afterglow (Lead Single)",
      artist: "Nova Ray",
      url: "",
      duration: "03:45"
    },
    gallery: [
      "https://loremflickr.com/800/800/synthesizer,knobs?lock=1011",
      "https://loremflickr.com/1200/800/keyboard,studio?lock=1012",
      "https://loremflickr.com/800/1200/electronic,music?lock=1013"
    ]
  },
  {
    id: "proj_02",
    slug: "aria-noir",
    title: "Aria Noir",
    artist: "The Velvet Quartet",
    genre: "Alternative",
    year: 2025,
    type: "Live Session",
    services: ["Live Session", "Recording", "Mixing"],
    image: "/images/projects/proj_02_strings_1787739130302.jpg",
    description: "Recorded entirely live in Studio B, capturing the raw, unpredictable energy of a string quartet blending acoustic mastery with electronic pedal effects.",
    equipment: ["SSL Duality", "Neumann U87", "AKG C414", "Strymon BigSky"],
    credits: {
      artist: "The Velvet Quartet",
      producer: "The Velvet Quartet",
      engineer: "Marcus Thorne",
      mix: "Marcus Thorne",
      mastering: "Aurelis Mastering Suite",
      recordedAt: "Aurelis Studio B"
    },
    gallery: [
      "https://loremflickr.com/1200/800/stringquartet,studio?lock=1021",
      "https://loremflickr.com/800/800/cello,recording?lock=1022",
      "https://loremflickr.com/1200/1200/violin,microphone?lock=1023"
    ]
  },
  {
    id: "proj_03",
    slug: "echoes-of-tomorrow",
    title: "Echoes of Tomorrow",
    artist: "Kairo",
    genre: "Hip-Hop",
    year: 2026,
    type: "Mixing",
    services: ["Mixing", "Mastering"],
    image: "/images/projects/proj_03_hiphop_1787739146743.jpg",
    description: "Taking heavily saturated boom-bap drums and intricate vocal stacks, we widened the stereo field and brought punch to the low-end without losing the gritty texture.",
    equipment: ["API 2500 Bus Compressor", "Pultec EQP-1A", "Shadow Hills Mastering Compressor"],
    credits: {
      artist: "Kairo",
      producer: "DJ Static",
      engineer: "Recorded off-site",
      mix: "Elena Rostova (Aurelis)",
      mastering: "Aurelis Mastering Suite",
      recordedAt: "Various"
    },
    audio: {
      title: "Tomorrow's Vibe",
      artist: "Kairo",
      url: "",
      duration: "02:50"
    },
    gallery: [
      "https://loremflickr.com/1600/900/vocalbooth,rap?lock=1031",
      "https://loremflickr.com/800/1200/recording,hiphop?lock=1032"
    ]
  },
  {
    id: "proj_04",
    slug: "void-walker-ost",
    title: "Void Walker OST",
    artist: "Hans Peterson",
    genre: "Cinematic",
    year: 2024,
    type: "Sound Design",
    services: ["Sound Design", "Production", "Mixing"],
    image: "/images/projects/proj_04_cinematic_1787739163040.jpg",
    description: "A monumental cinematic endeavor requiring custom foley, modular synth patching, and orchestral sampling to create the soundscape of an alien world.",
    equipment: ["Make Noise Shared System", "Focal SM9", "Bricasti M7", "Neumann KU 100"],
    credits: {
      artist: "Hans Peterson",
      producer: "Hans Peterson & Aurelis Team",
      engineer: "David Chen",
      mix: "David Chen",
      mastering: "Studio A",
      recordedAt: "Aurelis Studio A & B"
    },
    gallery: [
      "https://loremflickr.com/1200/800/cinematic,sounddesign?lock=1041",
      "https://loremflickr.com/800/800/foley,studio?lock=1042",
      "https://loremflickr.com/800/800/orchestra,recording?lock=1043",
      "https://loremflickr.com/1200/1200/modularsynth,cables?lock=1044"
    ]
  },
  {
    id: "proj_05",
    slug: "crimson-tide-live",
    title: "Live at the Archive",
    artist: "Crimson Tide",
    genre: "Rock",
    year: 2025,
    type: "Recording",
    services: ["Recording", "Mixing"],
    image: "/images/projects/proj_05_rock_1787739174413.jpg",
    description: "Capturing the thunderous energy of Crimson Tide. We tracked the drums to analog tape to impart natural saturation before bringing it into the digital realm.",
    equipment: ["Studer A827", "Neve 8068", "Royer R-121", "Shure SM57"],
    credits: {
      artist: "Crimson Tide",
      producer: "Michael Stone",
      engineer: "Ryan Miller",
      mix: "Ryan Miller",
      mastering: "External",
      recordedAt: "Aurelis Studio A"
    },
    audio: {
      title: "Tidal Wave",
      artist: "Crimson Tide",
      url: "",
      duration: "04:12"
    },
    gallery: [
      "https://loremflickr.com/1600/1200/analogtape,studio?lock=1051",
      "https://loremflickr.com/800/800/electricguitar,recording?lock=1052"
    ]
  },
  {
    id: "proj_06",
    slug: "silk-road-master",
    title: "Silk Road - The Master",
    artist: "Aisha Khan",
    genre: "R&B",
    year: 2026,
    type: "Mastering",
    services: ["Mastering"],
    image: "/images/projects/proj_06_mastering_1787739403084.jpg",
    description: "The final touch on a beautifully produced R&B record. We focused on adding subtle harmonic excitement and ensuring the low-end translated perfectly across all systems.",
    equipment: ["Shadow Hills Mastering Compressor", "Manley Massive Passive", "Weiss DS1-MK3"],
    credits: {
      artist: "Aisha Khan",
      producer: "Various",
      engineer: "Various",
      mix: "External",
      mastering: "Aurelis Mastering Suite",
      recordedAt: "Recorded off-site"
    },
    gallery: [
      "https://loremflickr.com/1200/800/equalizer,hardware?lock=1061",
      "https://loremflickr.com/1200/800/compressor,studio?lock=1062"
    ]
  },
  {
    id: "proj_07",
    slug: "velvet-groove-sessions",
    title: "The Velvet Sessions",
    artist: "Antoine Dupont",
    genre: "Jazz",
    year: 2024,
    type: "Live Session",
    services: ["Live Session", "Recording"],
    image: "/images/projects/proj_07_jazz_1787739417673.jpg",
    description: "An intimate, single-room recording of a contemporary jazz trio. Bleed was embraced to glue the instruments together organically.",
    equipment: ["Coles 4038", "AEA R88", "Neve 1073 Preamps"],
    credits: {
      artist: "Antoine Dupont",
      producer: "Antoine Dupont",
      engineer: "Julian Vance",
      mix: "Julian Vance",
      mastering: "Aurelis Mastering",
      recordedAt: "Aurelis Studio B"
    },
    gallery: [
      "https://loremflickr.com/800/1200/jazz,piano?lock=1071",
      "https://loremflickr.com/800/800/microphone,brass?lock=1072",
      "https://loremflickr.com/1600/900/doublebass,studio?lock=1073"
    ]
  },
  {
    id: "proj_08",
    slug: "neon-sky-ep",
    title: "Neon Sky EP",
    artist: "Ryan Miller",
    genre: "Pop",
    year: 2025,
    type: "Production",
    services: ["Production", "Recording", "Mixing"],
    image: "/images/projects/proj_08_pop_1787739432808.jpg",
    description: "Crafting a massive, stadium-ready pop sound. We stacked countless vocal layers and utilized aggressive parallel compression on the drums.",
    equipment: ["Sony C800G", "Tube-Tech CL 1B", "SSL Duality Console"],
    credits: {
      artist: "Ryan Miller",
      producer: "Aurelis Pop Team",
      engineer: "Sarah Jenkins",
      mix: "Alex Vance",
      mastering: "Studio A Mastering",
      recordedAt: "Aurelis Studio A"
    },
    audio: {
      title: "Sky High",
      artist: "Ryan Miller",
      url: "",
      duration: "03:15"
    },
    gallery: [
      "https://loremflickr.com/1200/1200/vocalist,studio?lock=1081",
      "https://loremflickr.com/1200/800/mixingboard,pop?lock=1082"
    ]
  },
  {
    id: "proj_09",
    slug: "bass-mechanic-vol1",
    title: "Bass Mechanic Vol 1",
    artist: "Tyrone Smith",
    genre: "Electronic",
    year: 2026,
    type: "Sound Design",
    services: ["Sound Design", "Mixing"],
    image: "/images/projects/proj_09_modular_1787739448322.jpg",
    description: "A sample pack and EP centered entirely around complex FM synthesis and heavy sub-bass manipulation.",
    equipment: ["Elektron Analog Rytm", "Serum", "Thermionic Culture Vulture"],
    credits: {
      artist: "Tyrone Smith",
      producer: "Tyrone Smith",
      engineer: "Tyrone Smith",
      mix: "Aurelis Mix Team",
      mastering: "Aurelis Mastering",
      recordedAt: "Aurelis Studio C"
    },
    gallery: [
      "https://loremflickr.com/1600/900/analog,synth,studio?lock=1091",
      "https://loremflickr.com/800/800/patchcables,synth?lock=1092"
    ]
  },
  {
    id: "proj_10",
    slug: "luma-vale-ambient",
    title: "Drifting States",
    artist: "Luma Vale",
    genre: "Alternative",
    year: 2024,
    type: "Mixing",
    services: ["Mixing", "Mastering"],
    image: "/images/projects/proj_10_ambient_1787739555003.jpg",
    description: "Mixing delicate, sweeping ambient textures. The challenge was maintaining clarity and separation in extremely dense, reverb-heavy mixes.",
    equipment: ["Eventide H9000", "Bricasti M7", "SSL Duality"],
    credits: {
      artist: "Luma Vale",
      producer: "Luma Vale",
      engineer: "Recorded off-site",
      mix: "David Chen",
      mastering: "Aurelis Mastering",
      recordedAt: "Home Studio"
    },
    gallery: [
      "https://loremflickr.com/1200/800/studio,reverb?lock=1101",
      "https://loremflickr.com/1200/1200/faders,mixing?lock=1102"
    ]
  },
  {
    id: "proj_11",
    slug: "echo-v-singles",
    title: "Echo V - Summer Singles",
    artist: "David Chen",
    genre: "Rock",
    year: 2025,
    type: "Recording",
    services: ["Recording"],
    image: "/images/projects/proj_11_indie_1787739580070.jpg",
    description: "Tracking a tight, punchy indie-rock EP over a single weekend. Fast-paced, high energy, relying on great mic placement rather than endless processing.",
    equipment: ["Neve 8068", "Urei 1176", "AKG C414"],
    credits: {
      artist: "David Chen",
      producer: "David Chen",
      engineer: "Marcus Thorne",
      mix: "External",
      mastering: "External",
      recordedAt: "Aurelis Studio A"
    },
    gallery: [
      "https://loremflickr.com/1600/900/guitarpedals,studio?lock=1111",
      "https://loremflickr.com/800/800/amplifier,mic?lock=1112",
      "https://loremflickr.com/800/1200/recording,rock?lock=1113"
    ]
  },
  {
    id: "proj_12",
    slug: "lyra-frost-acoustics",
    title: "Stripped Back",
    artist: "Lyra Anderson",
    genre: "Pop",
    year: 2026,
    type: "Live Session",
    services: ["Live Session", "Recording", "Mixing"],
    image: "/images/projects/proj_12_acoustic_1787739593967.jpg",
    description: "An acoustic re-imagining of Lyra's biggest hits, performed live in Studio B with a grand piano and cello accompaniment.",
    equipment: ["Yamaha C7 Grand", "Neumann U87", "Schoeps CMC6"],
    credits: {
      artist: "Lyra Anderson",
      producer: "Alex Vance",
      engineer: "Sarah Jenkins",
      mix: "Sarah Jenkins",
      mastering: "Aurelis Mastering",
      recordedAt: "Aurelis Studio B"
    },
    audio: {
      title: "Stripped Back (Medley)",
      artist: "Lyra Anderson",
      url: "",
      duration: "05:22"
    },
    gallery: [
      "https://loremflickr.com/1200/800/piano,microphone?lock=1121",
      "https://loremflickr.com/800/1200/acoustic,singer?lock=1122"
    ]
  }
];
