import { useFavoriteContext } from '@/context/FavoriteContext';
import { Character } from '@/types';
import { useEffect, useState } from 'react';

type FavoriteResponse = {
  isFavorite: boolean;
  handleFavorites: () => void;
};

export const useFavorite = (character: Character): FavoriteResponse => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteContext();

  const [isFavorite, setIsFavorite] = useState(
    favorites.find((favorite) => favorite.id == character.id) != undefined,
  );

  useEffect(() => {
    setIsFavorite(
      favorites.find((favorite) => favorite.id == character.id) != undefined,
    );
  }, [favorites, character]);

  const handleFavorites = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return { isFavorite, handleFavorites };
};
