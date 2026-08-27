import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Share2, Heart } from 'lucide-react';
import { allDiscoverData } from '../data/discoverData';
import type { AurelisItem } from '../data/discoverData';
import { useFavorites } from '../hooks/useFavorites';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<AurelisItem | null>(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const found = allDiscoverData.find(item => item.id === id);
      if (found) {
        setProject(found);
      } else {
        // Fallback or 404
        navigate('/discover');
      }
    }
  }, [id, navigate]);

  if (!project) return null;

  const isFav = favorites.includes(project.id);

  return (
    <div className="min-h-screen bg-background pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <Link to="/discover" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-muted-text hover:text-white uppercase transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Discover
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Artwork */}
          <div className="relative aspect-square w-full rounded-sm overflow-hidden border border-border shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-champagne-gold uppercase mb-6">
              <span>{project.type}</span>
              <span className="w-8 h-[1px] bg-champagne-gold/50"></span>
              <span>{project.genre}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-primary-text leading-tight mb-4">
              {project.title}
            </h1>
            
            <h2 className="text-xl tracking-[0.1em] text-muted-text uppercase mb-12">
              {project.artist}
            </h2>
            
            <div className="flex gap-4 mb-12">
              <button className="flex-1 flex items-center justify-center gap-3 bg-champagne-gold hover:bg-warm-highlight text-background font-bold tracking-[0.1em] uppercase py-4 rounded-sm transition-colors">
                <Play size={18} fill="currentColor" /> Play Excerpt
              </button>
              <button 
                onClick={() => toggleFavorite(project.id)}
                className="w-14 h-14 flex items-center justify-center border border-border rounded-sm hover:border-champagne-gold text-muted-text hover:text-champagne-gold transition-colors"
              >
                <Heart size={20} className={isFav ? "fill-burnt-orange text-burnt-orange" : ""} />
              </button>
              <button className="w-14 h-14 flex items-center justify-center border border-border rounded-sm hover:border-champagne-gold text-muted-text hover:text-champagne-gold transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            <div className="border-t border-border pt-12">
              <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">About this {project.type}</h3>
              <p className="text-muted-text leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {project.services && (
              <div className="mt-12">
                <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">Services Rendered</h3>
                <div className="flex gap-3 flex-wrap">
                  {project.services.map((svc, i) => (
                    <span key={i} className="px-4 py-2 border border-border text-xs font-bold tracking-[0.1em] text-muted-text uppercase rounded-sm">
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
