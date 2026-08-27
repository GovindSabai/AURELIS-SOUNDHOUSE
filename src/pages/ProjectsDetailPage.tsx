import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Pause, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';

// -----------------------------------------
// Subcomponents for Project Detail
// -----------------------------------------

function ProductionJourney() {
  const steps = [
    { id: 'idea', title: 'IDEA', desc: 'Pre-production, arrangement, and sound selection.' },
    { id: 'recording', title: 'RECORDING', desc: 'Tracking instruments, vocals, and room sounds.' },
    { id: 'editing', title: 'EDITING', desc: 'Comping takes, timing correction, and cleanup.' },
    { id: 'production', title: 'PRODUCTION', desc: 'Adding layers, synthesis, and final arrangement tweaks.' },
    { id: 'mixing', title: 'MIXING', desc: 'Balancing levels, EQ, compression, and spatial effects.' },
    { id: 'master', title: 'MASTER', desc: 'Final polish, loudness, and delivery formatting.' },
  ];

  const [activeStep, setActiveStep] = useState(steps[0].id);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative py-20 flex gap-12">
      {/* Sticky Indicator */}
      <div className="hidden md:block sticky top-32 h-[400px] w-48 shrink-0">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-text mb-8">From Idea to Master</h4>
        <div className="relative border-l border-white/10 pl-6 space-y-8">
          {steps.map((step) => (
            <div 
              key={`nav-${step.id}`} 
              className={`text-sm font-bold tracking-wider transition-all duration-300 ${activeStep === step.id ? 'text-champagne-gold scale-105' : 'text-muted-text'}`}
            >
              {step.title}
              {activeStep === step.id && (
                <div className="absolute left-[-5px] top-auto w-2 h-2 rounded-full bg-champagne-gold mt-[6px]" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-grow space-y-32">
        {steps.map((step, i) => (
          <div 
            key={step.id} 
            id={step.id} 
            ref={(el) => { stepRefs.current[i] = el; }}
            className={`transition-opacity duration-700 ${activeStep === step.id ? 'opacity-100' : 'opacity-30'}`}
          >
            <h3 className="text-3xl font-serif text-white mb-4">{step.title}</h3>
            <p className="text-lg text-muted-text max-w-xl">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Lightbox({ images, isOpen, initialIndex, onClose }: { images: string[], isOpen: boolean, initialIndex: number, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (dialogRef.current) dialogRef.current.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-label="Image gallery"
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center focus:outline-none"
      ref={dialogRef}
      tabIndex={-1}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-muted-text hover:text-white transition-colors z-10"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      <button 
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-6 text-muted-text hover:text-white transition-colors z-10 p-4"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>

      <div className="w-full max-w-5xl px-20 max-h-screen flex items-center justify-center">
        <img 
          src={images[currentIndex]} 
          alt={`Gallery image ${currentIndex + 1}`} 
          className="max-w-full max-h-[85vh] object-contain shadow-2xl"
        />
      </div>

      <button 
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-6 text-muted-text hover:text-white transition-colors z-10 p-4"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>
      
      <div className="absolute bottom-6 left-0 w-full text-center text-sm font-mono text-muted-text">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

// -----------------------------------------
// Main Page Component
// -----------------------------------------

export function ProjectsDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const triggerRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Graceful handling for missing slug
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-serif text-white mb-4">Project Not Found</h1>
        <p className="text-muted-text mb-8">The project you are looking for doesn't exist or has been moved.</p>
        <Link to="/projects" className="px-8 py-3 bg-white text-background font-bold tracking-widest uppercase rounded-sm hover:bg-champagne-gold transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    if (triggerRefs.current[galleryIndex]) {
      triggerRefs.current[galleryIndex]?.focus();
    }
  };

  const relatedProjects = PROJECTS.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto min-h-[70vh] sm:min-h-[80vh] flex flex-col">
        <div className="mb-8 sm:mb-12">
          <Link to="/projects" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-text hover:text-champagne-gold transition-colors group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center flex-grow">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="px-3 py-1 border border-champagne-gold/50 text-champagne-gold text-xs font-bold tracking-widest uppercase rounded-sm">
                Project
              </span>
              <span className="text-xs text-muted-text font-bold tracking-widest uppercase">
                / {project.genre}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white mb-4 sm:mb-6 leading-tight">{project.title}</h1>
            <p className="text-lg sm:text-xl text-muted-text mb-6 sm:mb-8">by <span className="text-white">{project.artist}</span> &middot; {project.year}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.services.map(service => (
                <span key={service} className="text-xs text-primary-text border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden animate-fade-in-up max-w-md mx-auto lg:max-w-none w-full" style={{ animationDelay: '0.2s' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </section>

      {/* Narrative & Services */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 lg:gap-32">
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-6 sm:mb-8">The Project</h3>
            <p className="text-lg sm:text-xl leading-relaxed text-white font-serif">{project.description}</p>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-6 sm:mb-8">What We Did</h3>
            <ul className="space-y-3 sm:space-y-4">
              {project.services.map((service, idx) => (
                <li key={service} className="flex items-baseline gap-3 sm:gap-4 group">
                  <span className="text-xs font-mono text-champagne-gold">0{idx + 1}</span>
                  {/* Graceful degradation: Services route exists globally as /services */}
                  <Link to="/services" className="text-xl sm:text-2xl font-serif text-white hover:text-champagne-gold transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Production Journey */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-white/5">
        <ProductionJourney />
      </section>

      {/* Audio Preview */}
      <section className="py-20 sm:py-32 bg-background-secondary/50 border-y border-white/5">
        <div className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-8 sm:mb-12">Listen to the Work</h3>
          
          <div className="max-w-2xl mx-auto bg-background p-4 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button 
              onClick={() => project.audio?.url ? setIsPlaying(!isPlaying) : null}
              disabled={!project.audio?.url}
              className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                project.audio?.url 
                  ? 'bg-champagne-gold text-background hover:scale-105' 
                  : 'bg-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              {isPlaying ? <Pause size={20} className="sm:w-6 sm:h-6" /> : <Play size={20} className="sm:w-6 sm:h-6 ml-1" />}
            </button>
            
            <div className="flex-grow w-full text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white truncate">{project.audio?.title || 'Preview Unavailable'}</h4>
              <p className="text-xs sm:text-sm text-muted-text">{project.artist}</p>
              
              <div className="mt-3 sm:mt-4 w-full h-6 sm:h-8 flex items-center gap-0.5 sm:gap-1 opacity-50">
                {/* Mock Waveform */}
                {Array.from({length: 30}).map(() => Math.max(10, Math.random() * 100)).map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-grow bg-champagne-gold rounded-full ${isPlaying ? 'animate-pulse' : ''}`} 
                    style={{ 
                      height: `${h}%`,
                      animationDuration: isPlaying ? `${0.5 + (i % 3) * 0.2}s` : undefined,
                      animationDelay: isPlaying ? `${i * 0.05}s` : undefined
                    }} 
                  />
                ))}
              </div>
            </div>
            
            <div className="text-xs font-mono text-muted-text shrink-0">
              {project.audio?.duration || '--:--'}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-8 sm:mb-12">Behind the Record</h3>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {project.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openGallery(idx)}
            >
              <img 
                ref={(el) => { triggerRefs.current[idx] = el; }}
                src={img} 
                alt={`Session outtake ${idx + 1}`}
                loading="lazy" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') openGallery(idx) }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>
      
      <Lightbox 
        images={project.gallery} 
        isOpen={galleryOpen} 
        initialIndex={galleryIndex} 
        onClose={closeGallery} 
      />

      {/* Details & Credits */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">
          {/* Equipment */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-6 sm:mb-8">Tools Behind the Record</h3>
            <ul className="space-y-3 sm:space-y-4 mb-8">
              {project.equipment.map(eq => (
                <li key={eq} className="text-white text-sm sm:text-base border-b border-white/5 pb-3 sm:pb-4">{eq}</li>
              ))}
            </ul>
            <Link to="/equipment" className="text-xs font-bold tracking-widest uppercase text-champagne-gold hover:text-white transition-colors flex items-center gap-2">
              Explore Equipment <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>

          {/* Credits */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-6 sm:mb-8">Credits</h3>
            <dl className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex justify-between border-b border-white/5 pb-3 sm:pb-4">
                <dt className="text-muted-text">Producer</dt>
                <dd className="text-white text-right">{project.credits.producer}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3 sm:pb-4">
                <dt className="text-muted-text">Engineer</dt>
                <dd className="text-white text-right">{project.credits.engineer}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3 sm:pb-4">
                <dt className="text-muted-text">Mix</dt>
                <dd className="text-white text-right">{project.credits.mix}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3 sm:pb-4">
                <dt className="text-muted-text">Mastering</dt>
                <dd className="text-white text-right">{project.credits.mastering}</dd>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3 sm:pb-4">
                <dt className="text-muted-text">Recorded At</dt>
                <dd className="text-white text-right">{project.credits.recordedAt}</dd>
              </div>
            </dl>
          </div>

          {/* Artist Connections */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-6 sm:mb-8">The Artist</h3>
            <div className="bg-background-secondary p-6 rounded-2xl border border-white/5 text-center max-w-sm mx-auto md:max-w-none">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 mx-auto mb-4 overflow-hidden">
                <img src={`https://picsum.photos/seed/${project.slug}-artist/200/200`} alt={project.artist} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{project.artist}</h4>
              <p className="text-xs sm:text-sm text-champagne-gold mb-6">{project.genre}</p>
              <Link to="/artists" className="inline-block px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors">
                View Artist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 sm:py-24 bg-background-secondary/30 border-t border-white/5">
        <div className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-muted-text mb-8 sm:mb-12">More from Aurelis</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/cta-studio/2000/1000" alt="Studio Console" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mb-4 sm:mb-6">Ready to make your next record?</h2>
          <p className="text-base sm:text-lg text-muted-text mb-8 sm:mb-10 max-w-xl mx-auto">Bring your vision to life with world-class acoustics, legendary analog gear, and experienced engineers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link to="/book" className="px-8 py-4 bg-champagne-gold text-background font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:scale-105 transition-transform">
              Book a Session
            </Link>
            <Link to="/studio" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:bg-white/5 transition-colors">
              Explore the Studio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
