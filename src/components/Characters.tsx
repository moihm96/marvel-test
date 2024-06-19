'use client';
import styles from '../styles/characters.module.css';

import { Character } from '@/types';
import { CharacterCard } from './CharacterCard';
import { SearchBar } from './SearchBar';
import { useFavoriteContext } from '@/context/FavoriteContext';
import { useEffect } from 'react';
const favoriteUrl = '/favorites';
type CharacterPropTypes = {
  characters: Character[];
  pathName?: string;
};

const Characters = ({ characters, pathName }: CharacterPropTypes) => {
  const isFavoritePage = pathName == favoriteUrl;

  const { setCount } = useFavoriteContext();

  useEffect(() => {
    setCount(characters.length);
  }, [characters.length, setCount]);

  return (
    <div>
      {isFavoritePage && <p className={styles.favTitle}>FAVORITES</p>}
      <SearchBar />
      <div className={styles.container}>
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};

export default Characters;
