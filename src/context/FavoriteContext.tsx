/* eslint-disable no-unused-vars */
'use client';
import { Character } from '@/types';
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type FavoriteContextType = {
  favorites: Character[];
  addFavorite: (favorite: Character) => void;
  removeFavorite: (id: number) => void;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

export function FavoriteWrapper({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [count, setCount] = useState<number>(50);

  const addFavorite = (favorite: Character) => {
    if (!favorites.includes(favorite)) setFavorites([...favorites, favorite]);
  };
  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        count,
        setCount,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  const favoriteContext = useContext(FavoriteContext);
  if (favoriteContext === undefined) {
    throw new Error('usefavoriteContext must be inside a FavoriteWrapper');
  }
  return favoriteContext;
}
