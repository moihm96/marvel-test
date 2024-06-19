'use-client';
import Link from 'next/link';
import styles from '../styles/characterCard.module.css';

import { FavIConOff } from './Icons/FavIconOff';
import { FavIconOn } from './Icons/FavIconOn';
import { Character } from '@/types';
import { useFavorite } from '@/hooks/useFavorite';

export const CharacterCard = ({ character }: { character: Character }) => {
  const { isFavorite, handleFavorites } = useFavorite(character);

  return (
    <div key={character.id} className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={`/character/${character.id}`}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width="188"
            height="190"
            className="responsiveImage"
          />
        </Link>
      </div>
      <div className={styles.cardFooter}>
        <p>{character.name}</p>
        <button className={styles.favButton} onClick={handleFavorites}>
          {isFavorite ? <FavIconOn /> : <FavIConOff />}
        </button>
      </div>
    </div>
  );
};
