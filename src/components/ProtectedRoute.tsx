import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoginModal } from './LoginModal';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      setShowLogin(true);
    }
  }, [user, loading]);

  const handleClose = () => {
    setShowLogin(false);
    if (!user) {
      setRedirectHome(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-champagne-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (redirectHome) {
    return <Navigate to="/" replace />;
  }

  if (!user) {
    return (
      <>
        {/* Render a placeholder background so the page isn't totally blank while modal is up */}
        <div className="min-h-screen bg-background"></div>
        <LoginModal isOpen={showLogin} onClose={handleClose} />
      </>
    );
  }

  return <>{children}</>;
}
