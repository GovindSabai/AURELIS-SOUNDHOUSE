import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  loginWithGoogle: async () => {},
  logout: async () => {},
  isLoginModalOpen: false,
  openLoginModal: () => {},
  closeLoginModal: () => {},
  showToast: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: '', type: 'info', visible: false });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      showToast('Successfully logged in!', 'success');
      // Redirect to home is handled by the component calling this, or just by state change
    } catch (error) {
      console.error("Error signing in with Google:", error);
      showToast('Login failed. Check console for details.', 'error');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      showToast('Successfully logged out', 'info');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthContext.Provider value={{ 
      user, loading, loginWithGoogle, logout, 
      isLoginModalOpen, openLoginModal, closeLoginModal, showToast 
    }}>
      {children}
      
      {/* Global Toast Component */}
      <div 
        className={`fixed bottom-6 right-6 z-[9999] transition-all duration-500 transform ${
          toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${
          toast.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
          toast.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
          'bg-champagne-gold/10 border-champagne-gold/20 text-champagne-gold'
        } backdrop-blur-md`}>
          <div className="font-bold tracking-wide">{toast.message}</div>
        </div>
      </div>
    </AuthContext.Provider>
  );
}
