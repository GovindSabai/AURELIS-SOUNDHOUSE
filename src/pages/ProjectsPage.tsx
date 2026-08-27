import React, { useState, useMemo, useEffect } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';

const CATEGORIES = ['All', 'Recording', 'Production', 'Mixing', 'Mastering', 'Live Session', 'Sound Design'];
const GENRES = ['All', 'Electronic', 'Rock', 'R&B', 'Hip-Hop', 'Jazz', 'Pop', 'Cinematic', 'Alternative'];
const YEARS = ['All', '2026', '2025', '2024'];
const SORTS = ['Featured', 'Newest', 'A-Z'];

function CountUp({ end, suffix = '' }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}{suffix}</>;
}

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeYear, setActiveYear] = useState('All');
  const [activeSort, setActiveSort] = useState('Featured');

  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.type === activeCategory);
    }
    if (activeGenre !== 'All') {
      result = result.filter(p => p.genre === activeGenre);
    }
    if (activeYear !== 'All') {
      result = result.filter(p => p.year.toString() === activeYear);
    }

    switch (activeSort) {
      case 'Newest':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'A-Z':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Featured':
      default:
        // Featured relies on original order or specific logic. We'll leave it as is for mock data.
        break;
    }
    
    return result;
  }, [activeCategory, activeGenre, activeYear, activeSort]);

  const featuredProject = PROJECTS.find(p => p.slug === 'midnight-afterglow') || PROJECTS[0];
  
  // Exclude featured project from main grid if we are showing "Featured" sort and no filters, 
  // but to keep it simple, we'll just show the grid as filtered.
  const displayProjects = filteredProjects;

  return (
    <div className="pt-24 sm:pt-32 pb-24 min-h-screen bg-background">
      
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto mb-16 sm:mb-20 animate-fade-in-up">
        <h4 className="text-champagne-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 sm:mb-6">The Aurelis Archive</h4>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white mb-6 sm:mb-8 max-w-4xl leading-tight">
          THE WORK <br/>
          <span className="text-muted-text italic">MADE AT AURELIS.</span>
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-8 border-y border-white/10 mt-10 sm:mt-16">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"><CountUp end={50} suffix="+" /></p>
            <p className="text-[10px] sm:text-xs text-muted-text uppercase tracking-widest">Projects</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"><CountUp end={24} /></p>
            <p className="text-[10px] sm:text-xs text-muted-text uppercase tracking-widest">Artists</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"><CountUp end={8} /></p>
            <p className="text-[10px] sm:text-xs text-muted-text uppercase tracking-widest">Genres</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">2024–26</p>
            <p className="text-[10px] sm:text-xs text-muted-text uppercase tracking-widest">Archive</p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto mb-20 sm:mb-32 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <ProjectCard project={featuredProject} featured={true} />
      </section>

      {/* Discovery / Filters */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto mb-16" id="archive">
        <h3 className="text-xl sm:text-2xl font-serif text-white mb-6 sm:mb-8">Explore the Work</h3>
        
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {/* Categories */}
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-4 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-colors border shrink-0 ${
                  activeCategory === cat 
                    ? 'bg-white text-background border-white' 
                    : 'bg-transparent text-muted-text border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            {/* Genres & Years */}
            <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex gap-1.5 sm:gap-2">
                <span className="text-xs text-muted-text uppercase tracking-widest py-1 sm:py-2 mr-1 sm:mr-2">Genre:</span>
                {GENRES.map(g => (
                  <button
                    key={g}
                    onClick={() => setActiveGenre(g)}
                    className={`whitespace-nowrap text-xs sm:text-sm font-medium transition-colors px-1.5 sm:px-2 py-1 ${activeGenre === g ? 'text-champagne-gold' : 'text-muted-text hover:text-white'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <div className="flex gap-2 sm:gap-3">
                {YEARS.map(y => (
                  <button
                    key={y}
                    onClick={() => setActiveYear(y)}
                    className={`text-xs sm:text-sm font-medium transition-colors ${activeYear === y ? 'text-champagne-gold' : 'text-muted-text hover:text-white'}`}
                  >
                    {y}
                  </button>
                ))}
              </div>
              
              <div className="h-4 sm:h-6 w-px bg-white/10 mx-1 sm:mx-2" />
              
              <select 
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="bg-transparent text-xs sm:text-sm text-white font-medium focus:outline-none border-none cursor-pointer appearance-none"
              >
                {SORTS.map(s => <option key={s} value={s} className="bg-background">{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-16">
            {displayProjects.map((project, i) => (
              <div key={project.id} className={i % 3 === 0 ? "lg:col-span-2" : ""}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center border border-white/5 rounded-2xl bg-background-secondary/50">
            <h4 className="text-xl font-serif text-white mb-4">No projects match these filters yet.</h4>
            <p className="text-muted-text mb-8">Try adjusting your genre, year, or category selection.</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setActiveGenre('All');
                setActiveYear('All');
              }}
              className="px-6 py-3 border border-white/20 rounded-full text-sm font-bold tracking-widest uppercase text-white hover:bg-white/10 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Latest Work Carousel */}
      <section className="py-24 border-t border-white/5 bg-background-secondary/30">
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto">
          <h3 className="text-sm font-bold text-muted-text uppercase tracking-[0.3em] mb-12">Latest Work</h3>
          <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-8">
            {PROJECTS.slice(0, 6).map(project => (
              <div key={project.id} className="min-w-[240px] md:min-w-[280px] snap-start shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
