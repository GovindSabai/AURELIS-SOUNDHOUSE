import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import { AudioProvider } from './context/AudioContext';
import { AuthProvider } from './context/AuthContext';
import { GlobalPlayer } from './components/GlobalPlayer';
import { SoundPage } from './pages/SoundPage';
import { LibraryPage } from './pages/LibraryPage';
import { StudioPage } from './pages/StudioPage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectsDetailPage } from './pages/ProjectsDetailPage';
// import { Discover } from './pages/Discover';
import { ArtistDiscovery } from './pages/ArtistDiscovery';
import { ArtistProfile } from './pages/ArtistProfile';
import { ProjectDetail } from './pages/ProjectDetail';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { EquipmentPage } from './pages/EquipmentPage';
import { EquipmentDetail } from './pages/EquipmentDetail';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/booking/BookingPage';
import { ScrollToTop } from './components/ScrollToTop';

import { ProtectedRoute } from './components/ProtectedRoute';
import { ManageBookingPage } from './pages/booking/ManageBookingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

// Wrapper to pass `setCurrentPage` to old components without breaking them
function LegacyRouteWrapper({ Component }: { Component: React.ElementType }) {
  const navigate = useNavigate();
  const setCurrentPage = (page: string) => {
    navigate(page === 'home' ? '/' : `/${page}`);
  };
  return <Component setCurrentPage={setCurrentPage} />;
}

const words = [
  { text: "AURALYN.", color: "from-accent-violet to-accent-cyan" },
  { text: "BEAT.", color: "from-pink-500 to-rose-400" },
  { text: "STUDIO.", color: "from-emerald-400 to-cyan-500" },
  { text: "VISION.", color: "from-amber-400 to-orange-500" },
];

function Hero({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[index].text;
    if (subIndex === word.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const speed = isDeleting ? 30 : 70;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words]);

  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white h-[180px] md:h-[220px]">
        YOUR SOUND. <br />
        YOUR WORLD. <br />
        YOUR <span className={`inline-block bg-gradient-to-r ${words[index].color} bg-clip-text text-transparent`}>
          {words[index].text.substring(0, subIndex)}
        </span><span className="animate-pulse text-white font-light ml-1">|</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 mt-4">
        A complete creative space for artists, producers, vocalists, and dreamers. Build tracks, experiment with sound, collaborate in real time, and bring your next idea to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <button onClick={() => setCurrentPage('book')} className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(138,43,226,0.4)]">
          Start Creating Free
        </button>
        <button onClick={() => setCurrentPage('sounds')} className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-white font-bold text-lg flex items-center justify-center gap-2">
          <Play size={20} /> Explore the Library
        </button>
      </div>
      <div className="w-full max-w-5xl aspect-video bg-black/50 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(138,43,226,0.3)] flex items-center justify-center overflow-hidden">
        <img src="/aurelis_mockup.jpg" alt="AURALYN Studio Mockup" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
      </div>
    </section>
  );
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return <>{count}{suffix}</>;
}

function TrustStrip() {
  return (
    <section className="py-16 border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-semibold text-gray-400 tracking-[0.2em] uppercase mb-10">Built for the next generation of sound creators.</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div><p className="text-4xl font-bold text-white mb-2"><AnimatedCounter end={2} suffix="M+" /></p><p className="text-sm text-gray-400 font-medium">Creative Sessions</p></div>
          <div><p className="text-4xl font-bold text-white mb-2"><AnimatedCounter end={850} suffix="K+" /></p><p className="text-sm text-gray-400 font-medium">Artists</p></div>
          <div><p className="text-4xl font-bold text-white mb-2"><AnimatedCounter end={120} suffix="+" /></p><p className="text-sm text-gray-400 font-medium">Countries</p></div>
          <div><p className="text-4xl font-bold text-white mb-2"><AnimatedCounter end={50} suffix="M+" /></p><p className="text-sm text-gray-400 font-medium">Sounds Created</p></div>
        </div>
      </div>
    </section>
  );
}

function SoundCard({ image, title, tag, onClick }: { image: string, title: string, tag: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className="group relative rounded-xl overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 transition-all">
      <img src={image} alt={title} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <span className="text-xs font-bold px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white mb-2 inline-block">{tag}</span>
        <h4 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">{title}</h4>
      </div>
    </div>
  );
}

function Features({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const mockSounds = [
    { image: "/sound_card_drums_1787634368168.jpg", title: "Cyber Drums", tag: "Drums" },
    { image: "/sound_card_synth_1787634384820.jpg", title: "Neon Synthscape", tag: "Synth" },
    { image: "/pack_cover_1_1787640848563.jpg", title: "Lo-Fi Textures", tag: "Lo-Fi" },
    { image: "/project_cover_2_1787639325831.jpg", title: "Midnight Drive", tag: "Electronic" },
    { image: "/pack_cover_2_1787640975758.jpg", title: "Ambient Scapes", tag: "Ambient" },
    { image: "/project_cover_1_1787639273921.jpg", title: "House Anthems", tag: "House" },
  ];
  const duplicatedSounds = [...mockSounds, ...mockSounds];

  return (
    <>
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            EVERYTHING YOU NEED <br />
            TO MAKE SOMETHING <span className="gradient-text">UNFORGETTABLE.</span>
          </h2>
          <p className="text-lg text-gray-400">From your first voice note to your final release, AURALYN brings your creative workflow into one connected space.</p>
        </div>
        <div className="h-80 rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border border-white/10 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute w-40 h-40 bg-accent-violet rounded-full blur-[80px] opacity-50 top-10 left-10 z-0" />
          <div className="absolute w-40 h-40 bg-accent-cyan rounded-full blur-[80px] opacity-50 bottom-10 right-10 z-0" />
          <img src="/cross_platform_mockup_1787636556562.jpg" alt="Connected Creative Workflow" className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Never start with silence.</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Explore an endless universe of loops, textures, vocals, drums, instruments, and experimental sounds.</p>
        </div>

        <div className="relative overflow-hidden w-full group/marquee">
          <div className="flex gap-6 whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused] w-max">
            {duplicatedSounds.map((pack, i) => (
              <div key={i} className="w-[280px] shrink-0">
                <SoundCard image={pack.image} title={pack.title} tag={pack.tag} onClick={() => setCurrentPage('sounds')} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-start">
          <button onClick={() => setCurrentPage('sounds')} className="text-accent-cyan hover:underline font-bold text-lg flex items-center gap-2">
            Explore more &rarr;
          </button>
        </div>
      </section>
    </>
  );
}

function Home() {
  const navigate = useNavigate();
  const setCurrentPage = (page: string) => navigate(page === 'home' ? '/' : `/${page}`);
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <TrustStrip />
      <Features setCurrentPage={setCurrentPage} />
    </>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent-violet/30 selection:text-white overflow-x-hidden text-primary-text flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<LegacyRouteWrapper Component={StudioPage} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
          <Route path="/sounds" element={<LegacyRouteWrapper Component={LibraryPage} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectsDetailPage />} />
          {/* <Route path="/discover" element={<Discover />} /> */}
          <Route path="/artists" element={<ArtistDiscovery />} />
          <Route path="/artists/:slug" element={<ArtistProfile />} />
          <Route path="/book" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
          <Route path="/manage-booking" element={<ProtectedRoute><ManageBookingPage /></ProtectedRoute>} />
          <Route path="/discover/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Sticky Player */}
      <GlobalPlayer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <AudioProvider>
          <AppContent />
        </AudioProvider>
      </AuthProvider>
    </Router>
  );
}
