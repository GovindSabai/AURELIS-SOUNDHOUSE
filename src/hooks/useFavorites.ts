import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('aurelis_favorites');
        if (stored) {
          setFavorites(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Error reading favorites from localStorage', e);
      }
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      let nextFavs;
      if (prev.includes(id)) {
        nextFavs = prev.filter((favId) => favId !== id);
      } else {
        nextFavs = [...prev, id];
      }
      
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('aurelis_favorites', JSON.stringify(nextFavs));
        } catch (e) {
          console.error('Error writing favorites to localStorage', e);
        }
      }
      
      return nextFavs;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
}
