import React, { useState } from 'react';
import { X, Lock, User as UserIcon } from 'lucide-react';
import { updateProfile, updatePassword } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function UpdateProfileModal({ isOpen, onClose }: Props) {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen || !user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
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
      setTimeout(() => {
        onClose();
        setSuccess('');
      }, 2000);
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-background-secondary border border-white/10 rounded-2xl p-8 animate-fade-in-up overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-text hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-white mb-2">Update Profile</h2>
          <p className="text-muted-text text-sm">Update your account details and password.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-sm">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500/50 rounded text-green-500 text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-text mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={user.email || ''}
                disabled
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-muted-text cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-text mb-1">Display Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon size={18} className="text-muted-text" />
              </div>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-white/10 rounded-lg text-white focus:outline-none focus:border-champagne-gold transition-colors"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-text mb-1">New Password (Optional)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-muted-text" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-white/10 rounded-lg text-white focus:outline-none focus:border-champagne-gold transition-colors"
                placeholder="Leave blank to keep current"
              />
            </div>
            <p className="text-xs text-muted-text mt-1">
              Note: Updating password may require you to have logged in recently.
            </p>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-champagne-gold hover:bg-warm-highlight text-background font-bold tracking-[0.1em] py-3 px-4 rounded-lg transition-colors uppercase disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}
