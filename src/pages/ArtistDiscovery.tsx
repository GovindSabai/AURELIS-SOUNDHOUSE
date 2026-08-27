import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Play, Plus, Search, Verified, PlayCircle, Share2, MoreHorizontal, Heart } from 'lucide-react';
import { ARTISTS, ARTIST_TRACKS, GENRES, MOODS } from '../data/artists';
import { useAudio } from '../context/AudioContext';
import { SoundCloudTrack } from '../components/SoundCloudTrack';

export function ArtistDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const { playTrack, currentTrack, isPlaying, favorites, toggleFavorite } = useAudio();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isSearching = searchTerm.trim().length > 0;

  const searchMatches = ARTISTS.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArtist = isSearching ? (searchMatches.length > 0 ? searchMatches[0] : null) : ARTISTS[0];
  
  // Trending Now section always remains static
  const trendingDisplay = ARTISTS.slice(1, 9);

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-primary-text selection:bg-champagne-gold/30 selection:text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 max-w-7xl mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
          DISCOVER THE SOUND.<br/>
          <span className="italic text-champagne-gold">MEET THE ARTISTS.</span>
        </h1>
        <p className="text-lg text-muted-text mb-12 max-w-2xl mx-auto">
          Explore a curated roster of visionary creators pushing the boundaries of global sound.
        </p>

        <div className="max-w-2xl mx-auto relative mb-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50" size={20} />
          <input 
            type="text" 
            placeholder="Search by artist name or genre..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-6 text-white focus:outline-none focus:border-champagne-gold transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {['Electronic', 'Hip-Hop', 'Indie', 'Lo-Fi', 'Ambient'].map(genre => (
            <button 
              key={genre}
              onClick={() => setSearchTerm(genre)}
              className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:text-white transition-all text-muted-text"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Artist (Search Result Spot) */}
      {featuredArtist ? (
        <section className="container mx-auto px-6 lg:px-12 max-w-7xl mb-32">
          <div 
            onClick={() => navigate(`/artists/${featuredArtist.slug}`)}
            className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] cursor-pointer group hover:border-white/30 transition-colors"
          >
            <div className="aspect-square md:aspect-auto overflow-hidden">
              <img src={featuredArtist.image} alt={featuredArtist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-champagne-gold">{featuredArtist.genre}</span>
                {featuredArtist.isVerified && <Verified size={14} className="text-blue-400" />}
              </div>
              <h2 className="text-5xl font-serif text-white mb-6 group-hover:text-champagne-gold transition-colors">{featuredArtist.name}</h2>
              <p className="text-muted-text leading-relaxed mb-8">{featuredArtist.bio}</p>
              
              <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={() => playTrack(ARTIST_TRACKS.find(t => t.artist === featuredArtist.name) || ARTIST_TRACKS[0])}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold tracking-[0.1em] text-sm uppercase rounded-full hover:bg-champagne-gold transition-colors"
                >
                  {currentTrack?.artist === featuredArtist.name && isPlaying ? 'Pause' : 'Listen Now'}
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold tracking-[0.1em] text-sm uppercase rounded-full hover:bg-white/10 transition-colors">
                  Follow
                </button>
                <button className="p-4 rounded-full hover:bg-white/10 text-white transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-6 lg:px-12 max-w-7xl mb-32">
          <div className="py-20 text-center border border-white/5 rounded-2xl bg-white/[0.02]">
            <p className="text-xl text-white/50 mb-2">Data not found !</p>
            <p className="text-sm text-white/30">No artists or genres match "{searchTerm}".</p>
          </div>
        </section>
      )}

      {/* Trending Now (Always visible) */}
      <section className="container mx-auto px-6 lg:px-12 max-w-7xl mb-32">
        <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-10">Trending Now</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingDisplay.map((artist, i) => (
            <motion.div 
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/artists/${artist.slug}`)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-white/5 border border-white/5">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const track = ARTIST_TRACKS.find(t => t.artist === artist.name) || ARTIST_TRACKS[0];
                    playTrack(track);
                  }}
                  className="absolute bottom-4 right-4 bg-champagne-gold text-black rounded-full p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
                >
                  <Play size={20} className="ml-1" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-white group-hover:text-champagne-gold transition-colors">{artist.name}</h4>
                {artist.isVerified && <Verified size={14} className="text-blue-400" />}
              </div>
              <p className="text-xs text-muted-text mt-1 uppercase tracking-wider">{artist.genre} • {(artist.followers / 1000).toFixed(1)}k Followers</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Find Your Sound (Genres) */}
      <section className="container mx-auto px-6 lg:px-12 max-w-7xl mb-32">
        <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-10">Find Your Sound</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {GENRES.map((genre) => (
            <div 
              key={genre.name} 
              onClick={() => {
                setSearchTerm(genre.name);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer flex items-end p-4 border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;)] opacity-30 mix-blend-overlay"></div>
              
              <h4 className="relative z-10 text-lg font-bold text-white transform group-hover:-translate-y-2 transition-transform duration-300">{genre.name}</h4>
              <div className="absolute bottom-4 right-4 text-white opacity-0 transform translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                &rarr;
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fresh From the Studio */}
      <section className="container mx-auto px-6 lg:px-12 max-w-7xl mb-32">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50">Fresh From the Studio</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {ARTIST_TRACKS.map((track) => {
            const isCurrentlyPlaying = currentTrack?.id === track.id;
            return (
              <SoundCloudTrack 
                key={track.id} 
                track={track} 
                isCurrentlyPlaying={isCurrentlyPlaying}
                isPlaying={isPlaying}
                playTrack={playTrack}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            );
          })}
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-white/[0.02] border-t border-white/5 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">YOUR SOUND BELONGS HERE.</h2>
        <p className="text-muted-text max-w-xl mx-auto mb-10 text-lg">
          Join a global community of creators. Distribute your music, build your profile, and connect with fans.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => navigate('/book')} className="px-8 py-4 bg-champagne-gold text-background font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-sm">
            BOOK A SESSION
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors rounded-sm">
            Explore Studio
          </button>
        </div>
      </section>
    </div>
  );
}
