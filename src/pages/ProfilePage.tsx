import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useAudio } from '../context/AudioContext';
import { updateProfile, updatePassword } from 'firebase/auth';
import { User, Lock, Heart, ListMusic, Play, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const { user } = useAuth();
  const { favorites, playlist, toggleFavorite, togglePlaylist, playTrack, currentTrack, isPlaying } = useAudio();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'profile' | 'favorites' | 'playlist'>('profile');
  
  // Profile Form State
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!user) return null; // Protected route handles redirect

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const promises = [];
      
      if (displayName !== user.displayName) {
        promises.push(updateProfile(user, { displayName }));
      }
      
      if (password) {
        promises.push(updatePassword(user, password));
      }

      await Promise.all(promises);
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/requires-recent-login') {
        setError('Please log out and log back in to update your password.');
      } else {
        setError(err.message || 'Failed to update profile.');
      }
    } finally {
      setLoading(false);
    }
  };

  const favoriteTracks = favorites;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-32">
            <div className="flex items-center gap-3 mb-8">
              <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <ArrowLeft size={24} />
              </button>
              <h1 className="text-3xl font-bold text-white">My Account</h1>
            </div>
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'profile' ? 'bg-white/10 text-champagne-gold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <User size={20} />
                <span className="font-medium">Profile Settings</span>
              </button>
              <button 
                onClick={() => setActiveTab('favorites')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'favorites' ? 'bg-white/10 text-champagne-gold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <Heart size={20} />
                <span className="font-medium">Favourite Songs</span>
              </button>
              <button 
                onClick={() => setActiveTab('playlist')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'playlist' ? 'bg-white/10 text-champagne-gold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <ListMusic size={20} />
                <span className="font-medium">Playlist</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10">
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="max-w-md animate-fade-in">
              <h2 className="text-2xl font-serif text-white mb-6">Profile Settings</h2>
              
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-sm">
                  {success}
                </div>
              )}

              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={user.email || ''}
                    disabled
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Display Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-background border border-white/10 rounded-lg text-white focus:outline-none focus:border-champagne-gold transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">New Password (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-background border border-white/10 rounded-lg text-white focus:outline-none focus:border-champagne-gold transition-colors"
                      placeholder="Leave blank to keep current"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-champagne-gold hover:bg-warm-highlight text-background font-bold tracking-[0.1em] py-3 px-8 rounded-lg transition-colors uppercase disabled:opacity-50 mt-4"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-serif text-white mb-6">Favourite Songs</h2>
              {favoriteTracks.length === 0 ? (
                <p className="text-gray-400">You haven't favorited any songs yet.</p>
              ) : (
                <div className="space-y-4">
                  {favoriteTracks.map(track => (
                    <div key={track.id} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded overflow-hidden cursor-pointer" onClick={() => playTrack(track)}>
                          <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play size={20} className="fill-white text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">{track.title}</h4>
                          <p className="text-gray-400 text-xs">{track.artist}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleFavorite(track)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-full hover:bg-red-500/10"
                      >
                        <Trash2 size={16} />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Playlist Tab */}
          {activeTab === 'playlist' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-serif text-white mb-6">Your Playlist</h2>
              {playlist.length === 0 ? (
                <p className="text-gray-400">Your playlist is empty.</p>
              ) : (
                <div className="space-y-4">
                  {playlist.map(track => (
                    <div key={track.id} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded overflow-hidden cursor-pointer" onClick={() => playTrack(track)}>
                          <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play size={20} className="fill-white text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">{track.title}</h4>
                          <p className="text-gray-400 text-xs">{track.artist}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => togglePlaylist(track)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-full hover:bg-red-500/10"
                      >
                        <Trash2 size={16} />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
