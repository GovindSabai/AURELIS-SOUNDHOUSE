import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { CheckCircle2, LogOut, AlertCircle } from 'lucide-react';

interface ToastState {
  title?: string;
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
  key: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info', title?: string) => void;
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
  const [toast, setToast] = useState<ToastState>({ message: '', type: 'info', visible: false, key: 0 });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success', title?: string) => {
    const nextKey = Date.now();
    setToast({ message, type, visible: true, title, key: nextKey });
    setTimeout(() => {
      setToast(prev => (prev.key === nextKey ? { ...prev, visible: false } : prev));
    }, 3800);
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
      showToast('Welcome back to Aurelis Soundhouse', 'success', 'Login Successful');
    } catch (error) {
      console.error("Error signing in with Google:", error);
      showToast('Login failed. Please try again.', 'error', 'Authentication Error');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      showToast('You have been signed out safely', 'info', 'Logout Successful');
    } catch (error) {
      console.error("Error signing out:", error);
      showToast('Failed to sign out. Please try again.', 'error', 'Error');
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
      
      {/* Global Upward-Moving Popup (Bottom to Top in Right Side) */}
      {toast.visible && (
        <div 
          key={toast.key}
          className="fixed bottom-10 right-6 md:right-10 z-[9999] pointer-events-none animate-toast-rise"
        >
          <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-2xl ${
            toast.type === 'success' 
              ? 'bg-[#0e1711]/95 border-emerald-500/30 text-emerald-400 shadow-[0_15px_35px_rgba(16,185,129,0.2)]' 
              : toast.type === 'error' 
              ? 'bg-[#1a1010]/95 border-red-500/30 text-red-400 shadow-[0_15px_35px_rgba(239,68,68,0.2)]' 
              : 'bg-[#18140c]/95 border-champagne-gold/30 text-champagne-gold shadow-[0_15px_35px_rgba(200,169,107,0.2)]'
          }`}>
            <div className={`p-2 rounded-xl flex items-center justify-center shrink-0 ${
              toast.type === 'success' ? 'bg-emerald-500/15 text-emerald-400' :
              toast.type === 'error' ? 'bg-red-500/15 text-red-400' :
              'bg-champagne-gold/15 text-champagne-gold'
            }`}>
              {toast.type === 'success' ? <CheckCircle2 size={20} className="stroke-[2.5]" /> :
               toast.type === 'error' ? <AlertCircle size={20} className="stroke-[2.5]" /> :
               <LogOut size={20} className="stroke-[2.5]" />}
            </div>
            
            <div className="flex flex-col pr-2">
              <span className="text-sm font-bold tracking-wide text-white leading-tight">
                {toast.title || (toast.type === 'success' ? 'Login Successful' : toast.type === 'error' ? 'Error' : 'Logout Successful')}
              </span>
              <span className="text-xs text-gray-300 font-medium mt-0.5">{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
}
