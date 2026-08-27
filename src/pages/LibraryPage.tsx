import React, { useState } from 'react';
import { Search, Filter, Play, Pause, Heart, LayoutGrid, ChevronRight, FileAudio, Settings, ArrowLeft } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

// Mock Data (Expanded)
const MOCK_PACKS = [
  { id: 'p1', title: 'Lo-Fi Textures', genre: 'Lo-Fi', mood: 'Chill', bpm: 85, key: 'Am', type: 'Loops', image: '/pack_cover_1_1787640848563.jpg', durationStr: '0:15', durationSec: 15, audioUrl: '/audio/alex-morgan-no-copyright-music-528321.mp3' },
  { id: 'p2', title: 'Cinematic Drones', genre: 'Cinematic', mood: 'Dark', bpm: 60, key: 'Dm', type: 'Full Stems', image: '/pack_cover_2_1787640975758.jpg', durationStr: '0:45', durationSec: 45, audioUrl: '/audio/alex-morgan-no-copyright-music-578487.mp3' },
  { id: 'p3', title: 'Neon Synths', genre: 'Electronic', mood: 'Energetic', bpm: 124, key: 'Cm', type: 'Loops', image: '/project_cover_1_1787639273921.jpg', durationStr: '0:08', durationSec: 8, audioUrl: '/audio/sigmamusicart-no-copyright-music-537751.mp3' },
  { id: 'p4', title: 'Midnight Drive', genre: 'Electronic', mood: 'Dark', bpm: 110, key: 'Gm', type: 'One-Shots', image: '/project_cover_2_1787639325831.jpg', durationStr: '0:02', durationSec: 2, audioUrl: '/audio/sigmamusicart-no-copyright-music-537751.mp3' },
  { id: 'p5', title: 'Acoustic Soul', genre: 'R&B', mood: 'Uplifting', bpm: 90, key: 'Fmaj', type: 'Loops', image: '/sound_card_synth_1787634384820.jpg', durationStr: '0:12', durationSec: 12, audioUrl: '/audio/joyinsound-no-copyright-chill-music-403411.mp3' },
  { id: 'p6', title: 'Cyber Drums', genre: 'Hip-Hop', mood: 'Aggressive', bpm: 140, key: 'Em', type: 'Loops', image: '/sound_card_drums_1787634368168.jpg', durationStr: '0:10', durationSec: 10, audioUrl: '/audio/prettyjohn1-lofi-lofi-music-587176.mp3' },
  { id: 'p7', title: 'Cosmic Keys', genre: 'Ambient', mood: 'Dreamy', bpm: 75, key: 'Cmaj', type: 'Loops', image: '/pack_cover_1_1787640848563.jpg', durationStr: '0:20', durationSec: 20, audioUrl: '/audio/ncprime-non-copyright-music-cinematic-290418.mp3' },
  { id: 'p8', title: 'Trap God', genre: 'Hip-Hop', mood: 'Dark', bpm: 150, key: 'Fm', type: 'Full Stems', image: '/sound_card_drums_1787634368168.jpg', durationStr: '0:30', durationSec: 30, audioUrl: '/audio/joyinsound-no-copyright-chill-music-403411.mp3' },
  { id: 'p9', title: 'House Anthems', genre: 'Electronic', mood: 'Uplifting', bpm: 128, key: 'Am', type: 'Loops', image: '/project_cover_1_1787639273921.jpg', durationStr: '0:16', durationSec: 16, audioUrl: '/audio/moodmode-no-copyright-music-201745.mp3' },
  { id: 'p10', title: 'Jazz Nights', genre: 'Lo-Fi', mood: 'Chill', bpm: 80, key: 'Bb', type: 'One-Shots', image: '/pack_cover_2_1787640975758.jpg', durationStr: '0:05', durationSec: 5, audioUrl: '/audio/prettyjohn1-lofi-lofi-music-587176.mp3' },
  { id: 'p11', title: 'Epic Trailer', genre: 'Cinematic', mood: 'Aggressive', bpm: 90, key: 'Dm', type: 'Full Stems', image: '/project_cover_2_1787639325831.jpg', durationStr: '1:00', durationSec: 60, audioUrl: '/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3' },
  { id: 'p12', title: 'R&B Vocals', genre: 'R&B', mood: 'Chill', bpm: 95, key: 'Gm', type: 'Vocals', image: '/sound_card_synth_1787634384820.jpg', durationStr: '0:12', durationSec: 12, audioUrl: '/audio/alex-morgan-no-copyright-music-578487.mp3' },
  { id: 'p13', title: 'Synthwave 84', genre: 'Electronic', mood: 'Energetic', bpm: 115, key: 'Cm', type: 'Loops', image: '/pack_cover_1_1787640848563.jpg', durationStr: '0:18', durationSec: 18, audioUrl: '/audio/sub_clair-electronic-586100.mp3' },
  { id: 'p14', title: 'Dark Drill', genre: 'Hip-Hop', mood: 'Dark', bpm: 142, key: 'Ebm', type: 'Loops', image: '/sound_card_drums_1787634368168.jpg', durationStr: '0:24', durationSec: 24, audioUrl: '/audio/moodmode-no-copyright-music-201745.mp3' },
  { id: 'p15', title: 'Ambient Scapes', genre: 'Ambient', mood: 'Chill', bpm: 70, key: 'Fmaj', type: 'Loops', image: '/pack_cover_2_1787640975758.jpg', durationStr: '0:35', durationSec: 35, audioUrl: '/audio/sub_clair-electronic-586100.mp3' },
  { id: 'p16', title: 'Pop Hooks', genre: 'Electronic', mood: 'Uplifting', bpm: 120, key: 'Cmaj', type: 'Vocals', image: '/project_cover_1_1787639273921.jpg', durationStr: '0:14', durationSec: 14, audioUrl: '/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3' },
];

export function LibraryPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const { playTrack, currentTrack, isPlaying, favorites, toggleFavorite } = useAudio();
  
  // States
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [activeMood, setActiveMood] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPack, setSelectedPack] = useState<any>(null);
  const [showAllTrending, setShowAllTrending] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [activePad, setActivePad] = useState<number | null>(null);

  // Pad Interaction
  const handlePadClick = (index: number) => {
    setActivePad(index);
    // Play a mock sound context interaction here if desired
    setTimeout(() => setActivePad(null), 150);
  };

  // Search & Filter Logic
  const filteredPacks = MOCK_PACKS.filter(pack => {
    const genreMatch = activeGenre === 'All' || pack.genre === activeGenre;
    const typeMatch = activeType === 'All' || pack.type === activeType;
    const moodMatch = activeMood === 'All' || pack.mood === activeMood;
    const searchMatch = !searchQuery || 
                        pack.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        pack.genre.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        pack.mood.toLowerCase().includes(searchQuery.toLowerCase());
    return genreMatch && typeMatch && moodMatch && searchMatch;
  });

  // Limit frontend to show only 8 sounds as requested
  const displayPacks = filteredPacks.slice(0, 8);

  // Show Terms Page
  if (showTerms) {
    return (
      <div className="pt-28 pb-40 min-h-screen max-w-4xl mx-auto px-6 animate-fade-in-up">
        <button onClick={() => setShowTerms(false)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors">
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Terms of Use & Licensing</h1>
        <div className="space-y-8 text-gray-300 leading-relaxed bg-[#111322] p-10 rounded-3xl border border-white/10">
          <section>
            <h3 className="text-xl font-bold text-white mb-3">1. Royalty-Free License</h3>
            <p>All sounds, loops, and samples provided in the AURALYN library are 100% royalty-free. This means you can use them in your personal and commercial musical compositions, beat tapes, film scores, and video game soundtracks without paying any royalties to AURALYN or the original sound designers.</p>
          </section>
          <section>
            <h3 className="text-xl font-bold text-white mb-3">2. Restrictions</h3>
            <p>You may not redistribute, repackage, or sell these sounds as standalone samples or as part of another sample pack. You cannot upload these raw, isolated sounds to streaming platforms or stock audio sites.</p>
          </section>
          <section>
            <h3 className="text-xl font-bold text-white mb-3">3. Ownership</h3>
            <p>AURALYN and its sound design partners retain all copyright and ownership of the original, unmodified sounds. Your license grants you the right to use them within the context of a larger creative work.</p>
          </section>
          <section>
            <h3 className="text-xl font-bold text-white mb-3">4. Flux Pads and Modification</h3>
            <p>Sounds modified or chopped using the Flux Pads feature are subject to the same licensing terms as the original sounds. You are free to use your performances in commercial tracks.</p>
          </section>
        </div>
      </div>
    );
  }

  // Show all trending full page
  if (showAllTrending) {
    return (
      <div className="pt-28 pb-40 min-h-screen max-w-[1400px] mx-auto px-6 animate-fade-in-up">
        <button onClick={() => setShowAllTrending(false)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors">
          <ArrowLeft size={20} /> Back to Library
        </button>
        <h2 className="text-4xl font-bold text-white mb-10">Trending This Week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {MOCK_PACKS.map((pack, index) => (
            <SoundCard 
               key={pack.id + '-' + index} 
               pack={pack} 
               isPlaying={currentTrack?.id === pack.id && isPlaying}
               isFavorite={favorites.includes(pack.id)}
               onPlay={() => playTrack({...pack, artist: pack.genre, category: pack.type})}
               onFavorite={() => toggleFavorite(pack.id)}
               onClick={() => setSelectedPack(pack)}
            />
          ))}
        </div>
      </div>
    );
  }

  // If a pack is selected, render it as a full page
  if (selectedPack) {
    return (
      <div className="pt-28 pb-40 min-h-screen max-w-7xl mx-auto px-6 animate-fade-in-up">
        <button onClick={() => setSelectedPack(null)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors">
          <ArrowLeft size={20} /> Back to Library
        </button>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
             <img src={selectedPack.image} alt={selectedPack.title} className="w-full aspect-square object-cover rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
          </div>
          <div className="flex-1">
             <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold mb-6 inline-block">{selectedPack.type}</span>
             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">{selectedPack.title}</h1>
             <p className="text-xl text-accent-cyan font-bold mb-10">{selectedPack.genre} • {selectedPack.mood}</p>
             
             <div className="flex gap-6 mb-12">
               <div className="bg-white/5 p-6 rounded-2xl text-center min-w-[120px]">
                 <p className="text-gray-400 text-sm uppercase mb-2">BPM</p>
                 <p className="text-white text-2xl font-bold">{selectedPack.bpm}</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl text-center min-w-[120px]">
                 <p className="text-gray-400 text-sm uppercase mb-2">Key</p>
                 <p className="text-white text-2xl font-bold">{selectedPack.key}</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl text-center min-w-[120px]">
                 <p className="text-gray-400 text-sm uppercase mb-2">Duration</p>
                 <p className="text-white text-2xl font-bold">{selectedPack.durationStr}</p>
               </div>
             </div>
             
             <div className="flex flex-col sm:flex-row gap-6">
               <button onClick={() => playTrack({...selectedPack, artist: selectedPack.genre, category: selectedPack.type})} className="px-10 py-5 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                 <Play size={24} className="fill-white" /> {currentTrack?.id === selectedPack.id && isPlaying ? 'Pause Preview' : 'Play Preview'}
               </button>
               <button onClick={() => setCurrentPage('studio')} className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
                 Open in Studio
               </button>
             </div>
          </div>
        </div>
        
        {/* Fake Tracklist for full page view */}
        <div className="mt-20 border-t border-white/10 pt-10">
           <h3 className="text-2xl font-bold text-white mb-6">Pack Contents</h3>
           <div className="space-y-2">
             {[1, 2, 3, 4, 5].map(i => (
               <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                     <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-cyan transition-colors">
                       <Play size={16} className="text-white fill-white ml-1" />
                     </button>
                     <span className="text-white font-medium">{selectedPack.title} - Sample {i}</span>
                  </div>
                  <div className="flex items-center gap-6">
                     <span className="text-gray-400 text-sm">{selectedPack.bpm} BPM</span>
                     <span className="text-gray-400 text-sm">{selectedPack.key}</span>
                     <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedPack.id + i); }} className="text-gray-500 hover:text-accent-violet">
                        <Heart size={18} />
                     </button>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-40 min-h-screen flex flex-col" dir="ltr">
      
      {/* 1. HERO */}
      <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Never start with silence.</h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          A world-class library of royalty-free loops, one-shots, and samples — built right into AURALYN, so you never begin a track from a blank screen.
        </p>
        
        <div className="max-w-3xl mx-auto relative mb-6">
          <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sounds, genres, moods, instruments..." 
            className="w-full bg-[#111322] border border-white/10 rounded-full py-5 pl-16 pr-6 text-lg text-white focus:outline-none focus:border-accent-violet transition-colors shadow-2xl" 
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {['Trending', 'New This Week', 'Free', 'Included in Plan', 'My Favorites'].map(chip => (
            <button key={chip} className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold text-gray-400 hover:text-white hover:border-white/30 transition-colors">
              {chip}
            </button>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex max-w-[1400px] mx-auto w-full px-6 gap-8">
        
        {/* 2. FILTER SIDEBAR */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-10 border-r border-white/5 pr-6">
           <div>
             <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest flex items-center justify-between">
               Filters <span className="text-xs text-accent-cyan cursor-pointer hover:underline" onClick={() => { setActiveGenre('All'); setActiveMood('All'); setActiveType('All'); setSearchQuery(''); }}>Clear All</span>
             </h3>
           </div>
           
           <FilterGroup title="Genre" options={['All', 'Hip-Hop', 'Lo-Fi', 'Electronic', 'Cinematic', 'Ambient', 'R&B']} active={activeGenre} setter={setActiveGenre} />
           <FilterGroup title="Sound Type" options={['All', 'Loops', 'One-Shots', 'Vocals', 'Full Stems']} active={activeType} setter={setActiveType} />
           <FilterGroup title="Mood" options={['All', 'Dark', 'Uplifting', 'Chill', 'Aggressive', 'Energetic', 'Dreamy']} active={activeMood} setter={setActiveMood} />
           
           <div>
             <h4 className="text-white font-bold mb-4">BPM Range</h4>
             <div className="w-full h-1 bg-white/10 rounded relative mb-2">
               <div className="absolute left-1/4 right-1/4 h-full bg-accent-violet rounded"></div>
               <div className="absolute left-1/4 w-3 h-3 bg-white rounded-full -top-1 shadow"></div>
               <div className="absolute right-1/4 w-3 h-3 bg-white rounded-full -top-1 shadow"></div>
             </div>
             <div className="flex justify-between text-xs text-gray-500">
               <span>60</span>
               <span>200</span>
             </div>
           </div>
        </aside>

        {/* 3 & 4. RESULTS & CAROUSELS */}
        <main className="flex-1 min-w-0">
          
          {/* Active Filters Row */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
             <Filter size={16} className="text-gray-500 mr-2" />
             <span className="text-sm text-gray-400">Active:</span>
             {searchQuery && <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">"{searchQuery}"</span>}
             {activeGenre !== 'All' && <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">{activeGenre}</span>}
             {activeType !== 'All' && <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">{activeType}</span>}
             {activeMood !== 'All' && <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">{activeMood}</span>}
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Library Results ({filteredPacks.length})</h2>
          
          {displayPacks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
              {displayPacks.map(pack => (
                <SoundCard 
                   key={pack.id} 
                   pack={pack} 
                   isPlaying={currentTrack?.id === pack.id && isPlaying}
                   isFavorite={favorites.includes(pack.id)}
                   onPlay={() => playTrack({...pack, artist: pack.genre, category: pack.type})}
                   onFavorite={() => toggleFavorite(pack.id)}
                   onClick={() => setSelectedPack(pack)}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-white/10 rounded-2xl bg-white/5 mb-20">
              <h3 className="text-2xl font-bold text-white mb-2">Please enter correct data.</h3>
              <p className="text-gray-400">No sounds match your current search and filters.</p>
              <button onClick={() => { setSearchQuery(''); setActiveGenre('All'); setActiveMood('All'); setActiveType('All'); }} className="mt-6 px-6 py-2 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors">
                Clear All Filters
              </button>
            </div>
          )}

        </main>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6">
        {/* Trending Carousel */}
        <div className="mb-16 border-t border-white/5 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Trending This Week</h2>
            <button onClick={() => setShowAllTrending(true)} className="text-sm text-accent-cyan hover:underline">See All</button>
          </div>
          
          {/* RTL Marquee container */}
          <div className="relative overflow-hidden w-full group/marquee">
             <div className="flex gap-6 whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused] w-max">
                {/* Duplicate arrays for seamless loop */}
                {[...MOCK_PACKS, ...MOCK_PACKS].map((pack, i) => (
                  <div key={i} className="w-[280px] shrink-0">
                    <SoundCard 
                      pack={pack} 
                      isPlaying={currentTrack?.id === pack.id && isPlaying}
                      isFavorite={favorites.includes(pack.id)}
                      onPlay={() => playTrack({...pack, artist: pack.genre, category: pack.type})}
                      onFavorite={() => toggleFavorite(pack.id)}
                      onClick={() => setSelectedPack(pack)}
                    />
                  </div>
                ))}
             </div>
          </div>
        </div>
        
        {/* 9. Flux Pads Mock Section */}
        <div className="mt-32 p-8 rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#05060A] border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/20 blur-[100px]"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1">
               <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4">Flux Pads</h2>
               <h3 className="text-3xl font-bold text-white mb-6">Auto-slice any loop.</h3>
               <p className="text-gray-400 mb-8">Load any sample from the library directly into the Flux Pads grid. Instantly chop, flip, pitch, and perform.</p>
               <button onClick={() => setCurrentPage('studio')} className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
                 Try Flux Pads
               </button>
             </div>
             
             <div className="flex-1 grid grid-cols-4 gap-3 bg-black/50 p-4 rounded-2xl border border-white/5">
               {Array.from({length: 16}).map((_, i) => (
                 <div 
                   key={i} 
                   onClick={() => handlePadClick(i)}
                   className={`aspect-square rounded-xl border transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group 
                     ${activePad === i ? 'bg-accent-cyan/40 border-accent-cyan scale-95 shadow-[0_0_20px_rgba(0,255,255,0.6)]' : 'bg-white/5 border-white/10 hover:border-accent-cyan hover:bg-accent-cyan/10'}`}
                 >
                    <span className={`absolute top-2 left-2 text-[9px] font-mono font-bold transition-colors ${activePad === i ? 'text-white' : 'text-gray-500 group-hover:text-accent-cyan'}`}>
                      PAD {i + 1}
                    </span>
                    
                    {/* Fake miniature waveform */}
                    <div className="flex items-center gap-[2px] h-6 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                      {Array.from({length: 8}).map((_, w) => (
                        <div 
                          key={w} 
                          className={`w-1 rounded-full transition-colors ${activePad === i ? 'bg-white' : 'bg-accent-violet/60 group-hover:bg-accent-cyan'}`} 
                          style={{ height: `${20 + Math.random() * 80}%` }}
                        ></div>
                      ))}
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
      
      {/* 10. Licensing Footer */}
      <div className="max-w-7xl mx-auto w-full px-6 mt-32 text-center text-xs text-gray-500 pb-10 border-t border-white/5 pt-10">
        <p>All library sounds are royalty-free. Sounds cannot be redistributed as standalone samples.</p>
        <p onClick={() => setShowTerms(true)} className="mt-2 text-gray-400 hover:text-white cursor-pointer transition-colors">View full Terms of Use / Licensing</p>
      </div>
      
    </div>
  );
}

// Sidebar Filter Group Component
function FilterGroup({ title, options, active, setter }: { title: string, options: string[], active: string, setter: (val: string) => void }) {
  return (
    <div className="mb-8">
      <h4 className="text-white font-bold mb-4">{title}</h4>
      <div className="space-y-2">
        {options.map(opt => (
          <div key={opt} onClick={() => setter(opt)} className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${active === opt ? 'bg-accent-cyan border-accent-cyan' : 'border-gray-600 group-hover:border-white'}`}>
               {active === opt && <div className="w-2 h-2 bg-black rounded-sm"></div>}
            </div>
            <span className={`text-sm transition-colors ${active === opt ? 'text-white font-medium' : 'text-gray-400 group-hover:text-gray-200'}`}>{opt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Sound Card Design
function SoundCard({ pack, isPlaying, isFavorite, onPlay, onFavorite, onClick }: any) {
  const heights = React.useMemo(() => {
    return Array.from({length: 30}).map(() => 20 + Math.random() * 80);
  }, [pack.id]);

  return (
    <div onClick={onClick} className="group bg-[#0B0D17] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-pointer">
       {/* Cover Image & Hover Actions */}
       <div className="relative aspect-square w-full overflow-hidden">
          <img src={pack.image} alt={pack.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
             <span className="bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">{pack.type}</span>
             <button onClick={(e) => { e.stopPropagation(); onFavorite(); }} className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
               <Heart size={14} className={isFavorite ? "fill-accent-violet text-accent-violet" : "text-white"} />
             </button>
          </div>

          {/* Hover Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={(e) => { e.stopPropagation(); onPlay(); }} className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors hover:scale-110">
               {isPlaying ? <Pause size={28} className="fill-white text-white" /> : <Play size={28} className="fill-white text-white ml-1" />}
            </button>
          </div>
          
          {/* Drag to studio prompt */}
          <div className="absolute bottom-3 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
             <span className="text-[10px] bg-accent-violet/90 text-white px-3 py-1 rounded-full font-bold shadow-lg flex items-center justify-center gap-1 w-max mx-auto cursor-grab active:cursor-grabbing">
               <FileAudio size={12} /> Drag to Studio
             </span>
          </div>
       </div>

       {/* Details */}
       <div className="p-5">
         <h3 className="text-white font-bold text-lg mb-1 truncate">{pack.title}</h3>
         <p className="text-accent-cyan text-xs font-bold mb-4">{pack.genre} • {pack.mood}</p>
         
         {/* Metadata Row */}
         <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-4">
            <span className="bg-white/5 px-2 py-1 rounded">{pack.bpm} BPM</span>
            <span className="bg-white/5 px-2 py-1 rounded">{pack.key}</span>
            <span>{pack.durationStr}</span>
         </div>
         
         {/* Fake Waveform */}
         <div className="w-full h-6 flex items-center gap-[2px] opacity-40 group-hover:opacity-100 transition-opacity">
            {heights.map((h, i) => (
               <div 
                 key={i} 
                 className={`flex-1 bg-white rounded-full ${isPlaying ? 'animate-pulse' : ''}`} 
                 style={{ 
                   height: `${h}%`,
                   animationDuration: isPlaying ? `${0.5 + (i % 3) * 0.2}s` : undefined,
                   animationDelay: isPlaying ? `${i * 0.05}s` : undefined
                 }}
               ></div>
            ))}
         </div>
       </div>
    </div>
  );
}
