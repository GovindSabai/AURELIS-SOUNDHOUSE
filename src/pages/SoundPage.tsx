import React, { useState } from 'react';
import { Play, Pause, Search, Sliders, ArrowRight, Save, Heart, ChevronRight } from 'lucide-react';
import { useAudio, type Track } from '../context/AudioContext';

const MOCK_TRACKS: Track[] = [
  { id: 't1', title: 'MIDNIGHT DRIVE', artist: 'Aria Noir', category: 'Electronic Production', image: '/project_cover_1_1787639273921.jpg', durationStr: '03:42', durationSec: 222 },
  { id: 't2', title: 'AFTERGLOW', artist: 'Kairo', category: 'Vocal Mixing', image: '/project_cover_2_1787639325831.jpg', durationStr: '04:18', durationSec: 258 },
  { id: 't3', title: 'NIGHT SESSION', artist: 'The Resonance', category: 'Live Recording', image: '/hero_console_1787639145228.jpg', durationStr: '05:27', durationSec: 327 },
];

export function SoundPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const { playTrack, currentTrack, isPlaying, favorites, recentlyPlayed } = useAudio();
  const [filter, setFilter] = useState('ALL');
  
  const featuredTrack = MOCK_TRACKS[0];

  return (
    <div className="pt-20 pb-40">
      
      {/* 1. HERO - LISTEN TO THE SOUND */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_console_1787639145228.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/80 to-transparent"></div>
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <p className="text-accent-cyan font-bold tracking-[0.2em] uppercase mb-4">Aurelis Soundhouse</p>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-none">LISTEN TO<br/>THE DIFFERENCE.</h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">A collection of recordings, productions and sonic experiences created inside Aurelis Soundhouse.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => setCurrentPage('sounds')} className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
              EXPLORE SOUNDS <ArrowRight size={20} className="rotate-90" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
              BOOK A SESSION <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SOUND */}
      <section className="py-20 px-6 max-w-5xl mx-auto -mt-32 relative z-20">
        <div className="bg-[#111322]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(138,43,226,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-violet/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-xs font-bold text-gray-400 tracking-[0.2em] mb-8 uppercase">Studio Session</p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <button 
              onClick={() => playTrack(featuredTrack)}
              className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan flex items-center justify-center text-white hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            >
              {(currentTrack?.id === featuredTrack.id && isPlaying) ? <Pause size={40} className="fill-white" /> : <Play size={40} className="fill-white ml-2" />}
            </button>
              <div className="flex-1 w-full">
              <h3 className="text-3xl font-bold text-white mb-2">{featuredTrack.title}</h3>
              <p className="text-accent-cyan font-medium mb-6">Aurelis Original</p>
              
              {/* Fake Waveform visual */}
              <div className="w-full h-16 flex items-center gap-1 opacity-60">
                 {React.useMemo(() => Array.from({length: 40}).map(() => Math.random() * 100), []).map((h, i) => (
                   <div key={i} className={`flex-1 bg-white rounded-full transition-all duration-300 ${(currentTrack?.id === featuredTrack.id && isPlaying) ? 'animate-pulse' : ''}`} style={{ 
                     height: `${h}%`,
                     animationDuration: (currentTrack?.id === featuredTrack.id && isPlaying) ? `${0.5 + (i % 3) * 0.2}s` : undefined,
                     animationDelay: (currentTrack?.id === featuredTrack.id && isPlaying) ? `${i * 0.05}s` : undefined
                   }}></div>
                 ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
                <span>00:00</span>
                <span>{featuredTrack.durationStr}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES & SEARCH */}
      <section className="py-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {['ALL', 'RECORDING', 'PRODUCTION', 'MIXING', 'MASTERING', 'VOCALS', 'INSTRUMENTAL', 'LIVE'].map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-colors ${filter === cat ? 'bg-white text-black' : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type="text" placeholder="Search by Artist, Genre..." className="w-full bg-[#111322] border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-accent-violet transition-colors" />
        </div>
      </section>

      {/* 4 & 5. EDITORIAL ROWS */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
        <EditorialRow index="01" track={MOCK_TRACKS[0]} desc="Dark textures, analog synths and cinematic rhythm." reverse={false} />
        <EditorialRow index="02" track={MOCK_TRACKS[1]} desc="Intimate vocals shaped with warmth and depth." reverse={true} />
        <EditorialRow index="03" track={MOCK_TRACKS[2]} desc="A live performance captured inside Studio A." reverse={false} />
      </section>

      {/* 7. A/B COMPARISON */}
      <section className="py-32 bg-[#111322]/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent-violet uppercase mb-4">Hear The Transformation</h2>
          <h3 className="text-4xl font-bold text-white mb-16">BEFORE vs AFTER</h3>
          
          <div className="bg-[#0B0D17] border border-white/10 rounded-3xl p-8 relative">
             <div className="flex items-center justify-between mb-8">
               <button className="px-6 py-2 rounded bg-white/10 text-white font-bold hover:bg-white/20">▶ BEFORE</button>
               <div className="flex-1 mx-8 h-1 bg-white/20 rounded relative">
                  <div className="absolute left-1/2 w-4 h-8 bg-accent-cyan -top-3.5 -ml-2 rounded shadow-[0_0_15px_rgba(0,255,255,0.5)] cursor-ew-resize"></div>
               </div>
               <button className="px-6 py-2 rounded bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-bold">▶ AURELIS MIX</button>
             </div>
             <p className="text-gray-400 text-sm">Drag the slider to seamlessly transition between the raw recording and the final mastered product.</p>
          </div>
        </div>
      </section>

      {/* 8. EXPLORE BY GENRE */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Explore by Sound</h2>
        <div className="flex flex-wrap gap-4">
          {['ROCK', 'JAZZ', 'HIP-HOP', 'ELECTRONIC', 'POP', 'R&B', 'SOUL', 'CINEMATIC', 'ACOUSTIC', 'INDIE'].map(genre => (
            <button key={genre} className="px-8 py-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-cyan transition-all text-xl font-bold text-white">
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* 13. THE AURELIS SOUND */}
      <section className="py-32 bg-[url('/hero_console_1787639145228.jpg')] bg-fixed bg-cover relative">
        <div className="absolute inset-0 bg-[#05060A]/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-4">The Brand</h2>
          <h3 className="text-5xl font-bold text-white mb-6">WHAT DOES AURELIS SOUND LIKE?</h3>
          <p className="text-xl text-gray-400 mb-20 max-w-3xl mx-auto">Warm where it matters. Detailed where it counts. Powerful without losing emotion.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            {['WARMTH', 'DEPTH', 'CLARITY', 'CHARACTER'].map(trait => (
              <div key={trait} className="relative group">
                 <div className="absolute inset-0 flex items-center opacity-20 group-hover:opacity-50 transition-opacity">
                    <div className="w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0wIDUwIFEzMCAyMCA1MCA1MCBUNTAgNTAgVTEwMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-repeat-x"></div>
                 </div>
                 <h4 className="text-2xl font-bold text-white relative z-10">{trait}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14 & 16. RECENTLY PLAYED / FAVORITES */}
      {(favorites.length > 0 || recentlyPlayed.length > 0) && (
        <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {favorites.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2"><Heart className="text-accent-violet fill-accent-violet"/> MY SOUNDS</h3>
              <div className="space-y-4">
                {favorites.map(id => {
                  const t = MOCK_TRACKS.find(x => x.id === id);
                  if(!t) return null;
                  return (
                    <div key={id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => playTrack(t)}>
                      <img src={t.image} className="w-12 h-12 rounded object-cover" />
                      <div>
                        <h4 className="text-white font-bold group-hover:text-accent-cyan transition-colors">{t.title}</h4>
                        <p className="text-xs text-gray-400">{t.artist}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {recentlyPlayed.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">RECENTLY HEARD</h3>
              <div className="space-y-4">
                {recentlyPlayed.map(t => (
                  <div key={t.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => playTrack(t)}>
                    <img src={t.image} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <h4 className="text-white font-bold group-hover:text-accent-cyan transition-colors">{t.title}</h4>
                      <p className="text-xs text-gray-400">{t.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 17. CTA */}
      <section className="py-40 px-6 text-center relative">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">HEAR WHAT'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-cyan">POSSIBLE.</span></h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Your sound deserves more than a recording. It deserves a place to become something unforgettable.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            BOOK A SESSION <ArrowRight size={20} />
          </button>
          <button className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors">
            EXPLORE SERVICES
          </button>
        </div>
      </section>

    </div>
  );
}

// Subcomponent for editorial alternating rows
function EditorialRow({ index, track, desc, reverse }: { index: string, track: Track, desc: string, reverse: boolean }) {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  
  return (
    <div className={`flex flex-col md:flex-row items-center gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 w-full relative group overflow-hidden rounded-2xl">
        <img src={track.image} alt={track.title} className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-1000" />
      </div>
      
      <div className="flex-1 w-full">
        <span className="text-sm font-bold text-accent-violet font-mono mb-4 block">{index}</span>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{track.title}</h3>
        <p className="text-xl text-gray-300 font-medium mb-4">{track.category}</p>
        <p className="text-gray-400 mb-10 max-w-md">{desc}</p>
        
        {/* Row Player */}
        <div className="flex items-center gap-6 mb-8">
          <button 
            onClick={() => playTrack(track)}
            className="text-white hover:text-accent-cyan transition-colors"
          >
            {(currentTrack?.id === track.id && isPlaying) ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <div className="flex-1 h-8 flex items-center">
             {/* Abstract waveform visual */}
             <div className="w-full h-px bg-white/20 relative">
               {(currentTrack?.id === track.id) && (
                 <div className="absolute left-0 top-0 h-full bg-accent-cyan w-1/3"></div>
               )}
             </div>
          </div>
          <span className="text-sm font-mono text-gray-400">{track.durationStr}</span>
        </div>
        
        <div className="flex gap-4">
          <button onClick={() => playTrack(track)} className="font-bold text-white tracking-widest text-sm hover:text-accent-cyan transition-colors flex items-center gap-2">
            ▶ PLAY
          </button>
          <button onClick={() => window.alert("Opening project... (Redirect to project details)")} className="font-bold text-gray-500 tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2 ml-6">
            VIEW PROJECT <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
