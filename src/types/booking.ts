export interface BookingState {
  bookingId?: string;
  sessionType: string;
  room: string;
  date: string; // YYYY-MM-DD
  time: string; // e.g., '10:00 AM'
  duration: number; // in hours
  equipment: string[];
  
  // Personal Info
  name: string;
  email: string;
  phone: string;
  
  // Project Info
  artistName: string;
  numTracks: number;
  numPeople: number;
  genre: string;
  notes: string;
}

export const initialBookingState: BookingState = {
  sessionType: '',
  room: '',
  date: '',
  time: '',
  duration: 3, // Default 3 hours
  equipment: [],
  name: '',
  email: '',
  phone: '',
  artistName: '',
  numTracks: 1,
  numPeople: 1,
  genre: '',
  notes: ''
};

export const SESSION_TYPES = [
  { id: 'recording', name: 'Recording Session', icon: '🎙️', desc: 'Vocals, instruments, podcasts. Professional recording environment.', price: 1500 },
  { id: 'mixing', name: 'Mixing Session', icon: '🎚️', desc: 'Professional mixing. Detailed sound balancing.', price: 2000 },
  { id: 'mastering', name: 'Mastering Session', icon: '🎛️', desc: 'Final polish and loudness. Streaming-ready masters.', price: 1000 },
  { id: 'production', name: 'Production Session', icon: '🎼', desc: 'Beat production. Arrangement & sound design.', price: 2500 },
  { id: 'review', name: 'Listening / Review', icon: '🎧', desc: 'Track feedback. Mix revisions.', price: 500 }
];

export const ROOMS = [
  { id: 'studio-a', name: 'Studio A', desc: 'The Flagship Tracking Room', image: '/studio_a_real.jpg' },
  { id: 'studio-b', name: 'Studio B', desc: 'The Analog Suite', image: '/studio_b_real.jpg' },
  { id: 'north-room', name: 'The North Room', desc: 'Dolby Atmos & Immersive Audio', image: '/studio_north_real.jpg' },
  { id: 'writing-room', name: 'The Writing Room', desc: 'Cozy Production & Vocal Suite', image: '/studio_writing_real.jpg' }
];

export const EQUIPMENT_ADDONS = [
  { id: 'neumann', name: 'Neumann Microphones', price: 500 },
  { id: 'vintage', name: 'Vintage Microphones', price: 800 },
  { id: 'analog', name: 'Analog Outboard Gear', price: 1000 },
  { id: 'preamps', name: 'Premium Preamps', price: 400 },
  { id: 'amps', name: 'Guitar / Bass Amps', price: 300 },
  { id: 'synths', name: 'Keyboard / Synthesizers', price: 600 }
];
