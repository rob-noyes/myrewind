import React from 'react';
import FavoritesSection from '../components/FavoritesSection';
import TrendingSection from '../components/TrendingSection';

export default function Homepage({
  movies,
  setSearchValue,
  addFavoriteMovie,
  favorites,
  removeFavoriteMovie,
  trending,
}) {
  return (
    <div>
      <div>
        <TrendingSection
          trending={trending}
          addFavoriteMovie={addFavoriteMovie}
        />
      </div>
      <div>
        <FavoritesSection
          favorites={favorites}
          removeFavoriteMovie={removeFavoriteMovie}
        />
      </div>
    </div>
  );
}
