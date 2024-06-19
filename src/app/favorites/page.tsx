'use client';

import { useFavoriteContext } from '@/context/FavoriteContext';
import Characters from '@/components/Characters';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const FavoritePage = () => {
  const { favorites, setCount } = useFavoriteContext();
  const pathName = usePathname();

  useEffect(() => {
    setCount(favorites.length);
  }, [favorites, setCount]);

  return <Characters characters={favorites} pathName={pathName} />;
};

export default FavoritePage;
