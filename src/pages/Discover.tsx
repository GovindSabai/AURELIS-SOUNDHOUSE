import React from 'react';
import { Link } from 'react-router-dom';

export function Discover() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-serif text-[#F2E8C6] mb-8">Discover Page</h1>
        <p className="text-xl text-white/70 tracking-wide leading-relaxed mb-12">
          This page was missing and has been recreated. Add your content here!
        </p>
        <Link 
          to="/" 
          className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
        >
          &larr; BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
