import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Play, Pause, Share2, Verified, ArrowLeft, Heart, MoreHorizontal, PlayCircle, Clock, PlaySquare, MessageCircle, Repeat, MessageSquare, ThumbsUp } from 'lucide-react';
import { ARTISTS, ARTIST_TRACKS } from '../data/artists';
import { useAudio } from '../context/AudioContext';
import { SoundCloudTrack } from '../components/SoundCloudTrack';

export function ArtistProfile() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Music');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { playTrack, currentTrack, isPlaying, favorites, toggleFavorite } = useAudio();

  const artist = ARTISTS.find(a => a.slug === slug);
  const artistTracks = ARTIST_TRACKS.filter(t => t.artist === artist?.name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artist) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-24 text-center">
        <h1 className="text-4xl font-serif text-[#F2E8C6] mb-4">Artist Not Found</h1>
        <p className="text-muted-text mb-8">We couldn't find the artist you're looking for.</p>
        <Link to="/artists" className="text-white hover:text-champagne-gold tracking-widest text-xs uppercase font-bold">&larr; Back to Discovery</Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen text-primary-text selection:bg-champagne-gold/30 selection:text-white pb-32">
      
      {/* Banner */}
      <div className="relative h-64 md:h-96 w-full">
        <img src={artist.banner} alt={`${artist.name} Banner`} className="w-full h-full object-cover grayscale opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <button 
          onClick={() => navigate('/artists')}
          className="absolute top-24 left-6 lg:left-12 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl -mt-32 relative z-10">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-12">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-white/5">
            <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-champagne-gold">{artist.genre}</span>
              {artist.isVerified && <Verified size={16} className="text-blue-400" />}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">{artist.name}</h1>
            <p className="text-sm text-muted-text tracking-widest uppercase font-mono">
              {artist.followers.toLocaleString()} Followers • {artist.location}
            </p>
          </div>
          <div className="flex gap-4 relative">
            <button 
              onClick={() => alert("First need to login (built in later) to follow.")}
              className="px-8 py-3 bg-champagne-gold text-background font-bold tracking-[0.1em] text-xs uppercase rounded-full hover:bg-white transition-colors"
            >
              Follow
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsShareOpen(!isShareOpen)}
                className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <Share2 size={18} />
              </button>
              
              {isShareOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#05060A] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 animate-fade-in-up">
                  {['Copy Link', 'Twitter', 'Facebook'].map(opt => (
                    <button key={opt} onClick={() => { alert(`Shared to ${opt}!`); setIsShareOpen(false); }} className="w-full text-left px-4 py-3 text-sm font-bold tracking-widest uppercase text-white hover:bg-white/10 transition-colors">
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sub-nav */}
        <div className="flex items-center gap-8 border-b border-white/10 mb-12 overflow-x-auto pb-4">
          {['Music', 'Albums', 'About', 'Community'].map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`text-sm tracking-[0.1em] uppercase font-bold whitespace-nowrap transition-colors ${activeTab === tab ? 'text-white border-b-2 border-champagne-gold pb-4 -mb-[17px]' : 'text-muted-text hover:text-white pb-4 -mb-[17px]'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Music' && (
          <div className="grid lg:grid-cols-3 gap-16 animate-fade-in-up">
            {/* Left Col: Tracks */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-6">Popular Tracks</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {artistTracks.length > 0 ? artistTracks.map((track, i) => {
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
                }) : (
                  <div className="col-span-2 p-8 text-center text-white/30 border border-white/5 rounded-xl">
                    No tracks available for this artist yet.
                  </div>
                )}
              </div>
            </div>

            {/* Right Col: About Snippet */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">About</h3>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <p className="text-muted-text leading-relaxed mb-6 line-clamp-4">{artist.bio}</p>
                <button onClick={() => setActiveTab('About')} className="text-sm font-bold tracking-widest uppercase text-champagne-gold hover:text-white transition-colors">Read More &rarr;</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Albums' && (
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h3 className="text-lg font-bold text-white mb-6">Album Tracks</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {artist.albumTracks?.map((track, i) => {
                const fullTrack = {
                  ...track,
                  artist: artist.name,
                  category: artist.genre,
                  image: artist.image,
                  durationSec: 180
                };
                const isCurrentlyPlaying = currentTrack?.id === track.id;
                return (
                  <SoundCloudTrack 
                    key={track.id} 
                    track={fullTrack} 
                    isCurrentlyPlaying={isCurrentlyPlaying}
                    isPlaying={isPlaying}
                    playTrack={playTrack}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                  />
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'About' && (
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h3 className="text-3xl font-serif text-white mb-8">About {artist.name}</h3>
            <div className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-3xl">
              <p className="text-lg text-white/80 leading-relaxed mb-10">{artist.bio}</p>
              
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Location</span>
                    <span className="text-white font-mono">{artist.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Member Since</span>
                    <span className="text-white font-mono">{artist.memberSince}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40">Followers</span>
                    <span className="text-white font-mono">{artist.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-white/40">Influences</span>
                    <span className="text-white text-right">{artist.influences.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Community' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up">
            {/* @ts-ignore */}
            {artist.communityPosts?.map(post => (
              <div key={post.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <img src={artist.image} alt={artist.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <h5 className="font-bold text-white text-sm">{artist.name}</h5>
                    <p className="text-xs text-muted-text">{post.date}</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">{post.content}</p>
                <div className="flex items-center gap-6 border-t border-white/5 pt-4 text-muted-text">
                  <button className="flex items-center gap-2 hover:text-champagne-gold transition-colors">
                    <ThumbsUp size={16} /> <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <MessageSquare size={16} /> <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
