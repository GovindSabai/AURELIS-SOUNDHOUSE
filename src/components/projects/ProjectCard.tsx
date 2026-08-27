import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <Link 
        to={`/projects/${project.slug}`}
        className="group block relative rounded-2xl overflow-hidden bg-background-secondary border border-white/5 hover:border-champagne-gold/30 transition-all duration-500"
      >
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-champagne-gold text-background text-xs font-bold tracking-wider uppercase rounded-sm">
                Project in Focus
              </span>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-2 group-hover:-translate-y-1 transition-transform duration-300">{project.title}</h3>
            <p className="text-champagne-gold tracking-widest uppercase text-sm mb-6">{project.genre} / {project.type}</p>
            <p className="text-muted-text mb-8 line-clamp-3 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.services.map(service => (
                <span key={service} className="text-xs text-primary-text border border-white/10 px-3 py-1 rounded-full">
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center text-sm font-bold tracking-widest uppercase text-white group-hover:text-champagne-gold transition-colors">
              View Project 
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </div>
            <div className="h-[1px] w-0 bg-champagne-gold mt-4 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/projects/${project.slug}`}
      className="group flex flex-col relative"
    >
      <div className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden mb-6 bg-background-secondary border border-white/5">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 md:block hidden">
          <div className="flex flex-wrap gap-2">
            {project.services.slice(0, 3).map(service => (
              <span key={service} className="text-[10px] text-white border border-white/20 px-2 py-1 rounded backdrop-blur-md">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-xl font-bold text-white mb-1 group-hover:-translate-y-1 transition-transform duration-300">{project.title}</h4>
        <p className="text-sm text-muted-text">{project.artist} &middot; {project.year}</p>
        
        <div className="mt-4 flex items-center text-xs font-bold tracking-widest uppercase text-white group-hover:text-champagne-gold transition-colors">
          View Project 
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}
