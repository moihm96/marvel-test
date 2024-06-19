'use client';

import { useFavoriteContext } from '@/context/FavoriteContext';
import Characters from '@/components/Characters';
import { usePathname } from 'next/navigation';

const FavoritePage = () => {
  const { favorites } = useFavoriteContext();
  const pathName = usePathname();
  return (
    <Characters
      characters={favorites}
      count={favorites.length}
      pathName={pathName}
    />
  );
};

export default FavoritePage;
