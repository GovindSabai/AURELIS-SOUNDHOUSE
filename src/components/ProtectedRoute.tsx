import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, isLoginModalOpen, openLoginModal } = useAuth();
  const [redirectHome, setRedirectHome] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  useEffect(() => {
    if (!loading && !user && !hasPrompted) {
      openLoginModal();
      setHasPrompted(true);
    }
  }, [user, loading, hasPrompted, openLoginModal]);

  useEffect(() => {
    // If we prompted for login, and the modal is closed, and we still don't have a user
    if (hasPrompted && !isLoginModalOpen && !user) {
      setRedirectHome(true);
    }
  }, [isLoginModalOpen, hasPrompted, user]);

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
    return <div className="min-h-screen bg-background"></div>;
  }

  return <>{children}</>;
}
