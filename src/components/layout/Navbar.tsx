import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, logout, openLoginModal } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Studio', path: '/studio' },
    { name: 'Services', path: '/services' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Artists', path: '/artists' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sounds', path: '/sounds' },
    { name: 'Contact', path: '/contact' },
  ];

  const getProfileInitial = () => {
    if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return 'U';
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'} py-4`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center group">
          <img src="/aurelis_logo.svg" alt="Aurelis Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `relative text-xs tracking-[0.1em] font-medium transition-colors uppercase group ${
                  isActive ? 'text-white' : 'text-muted-text hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/10 hover:border-champagne-gold overflow-hidden transition-all focus:outline-none"
              >
                {user.photoURL && !imageError ? (
                  <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" onError={() => setImageError(true)} />
                ) : (
                  <span className="text-white font-bold text-lg bg-champagne-gold/20 w-full h-full flex items-center justify-center">
                    {getProfileInitial()}
                  </span>
                )}
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-background-secondary border border-white/10 rounded-xl shadow-2xl py-2 animate-fade-in-up">
                  <div className="px-4 py-3 border-b border-white/5 mb-2">
                    <p className="text-sm font-medium text-white truncate">{user.displayName || 'User'}</p>
                    <p className="text-xs text-muted-text truncate">{user.email}</p>
                  </div>
                  
                  <Link 
                    to="/manage-booking"
                    onClick={() => setIsProfileDropdownOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-text hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Calendar size={16} />
                    Manage Bookings
                  </Link>

                  <Link 
                    to="/profile"
                    onClick={() => setIsProfileDropdownOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-muted-text hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Settings size={16} />
                    My Profile
                  </Link>
                  
                  <button 
                    onClick={() => {
                      logout();
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={openLoginModal}
              className="text-xs font-bold tracking-[0.1em] text-white hover:text-champagne-gold transition-colors uppercase"
            >
              Login
            </button>
          )}
          <Link to="/book" className="text-xs font-bold tracking-[0.1em] text-background bg-champagne-gold hover:bg-warm-highlight px-6 py-3 rounded-sm transition-colors uppercase">
            Book a Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-40 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 pt-24 overflow-y-auto">
          {user && (
            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full border-2 border-champagne-gold overflow-hidden">
                {user.photoURL && !imageError ? (
                  <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" onError={() => setImageError(true)} />
                ) : (
                  <span className="text-white font-bold text-2xl bg-champagne-gold/20 w-full h-full flex items-center justify-center">
                    {getProfileInitial()}
                  </span>
                )}
              </div>
              <p className="text-white text-lg font-medium">{user.displayName || user.email}</p>
            </div>
          )}

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-2xl font-serif tracking-wide transition-colors uppercase ${
                  isActive ? 'text-champagne-gold' : 'text-muted-text hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <div className="flex flex-col items-center gap-4 mt-8 w-full">
              <Link 
                to="/manage-booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-xs text-center text-sm font-bold tracking-[0.1em] text-champagne-gold border border-champagne-gold/30 hover:bg-champagne-gold/10 py-4 rounded-sm transition-colors uppercase"
              >
                Manage Bookings
              </Link>
              <Link 
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-xs text-center text-sm font-bold tracking-[0.1em] text-white border border-white/20 py-4 rounded-sm transition-colors uppercase"
              >
                My Profile
              </Link>
              <button 
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full max-w-xs text-sm font-bold tracking-[0.1em] text-red-400 border border-red-400/20 py-4 rounded-sm transition-colors uppercase hover:bg-red-400/10"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => {
                openLoginModal();
                setMobileMenuOpen(false);
              }}
              className="mt-8 text-sm font-bold tracking-[0.1em] text-white hover:text-champagne-gold transition-colors uppercase"
            >
              Login
            </button>
          )}
          
          <Link to="/book" className="mt-4 w-full max-w-xs text-center text-sm font-bold tracking-[0.1em] text-background bg-champagne-gold px-8 py-4 rounded-sm transition-colors uppercase mb-8">
            Book a Session
          </Link>
        </div>
      </div>
    </nav>
  );
}
