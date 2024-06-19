'use client';

import Comic from './Comic';
import styles from '../styles/characterDetail.module.css';
import { FavIConOff } from './Icons/FavIconOff';
import { FavIconOn } from './Icons/FavIconOn';
import type { Character, Comic as ComicType } from '@/types';
import { useFavorite } from '@/hooks/useFavorite';

const CharacterDetail = ({
  character,
  comics,
}: {
  character: Character;
  comics: ComicType[];
}) => {
  const { isFavorite, handleFavorites } = useFavorite(character);

  return (
    <div>
      <div className={styles.characterContainer}>
        <div className={styles.imageContainer}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width="320"
            height="320"
            className="responsiveImage"
          />
        </div>
        <div className={styles.characterInfo}>
          <div className={styles.nameContainer}>
            <p className={styles.name}>{character.name}</p>
            <button className={styles.favButton} onClick={handleFavorites}>
              {isFavorite ? <FavIconOn /> : <FavIConOff />}
            </button>
          </div>
          <p>{character.description}</p>
        </div>
      </div>
      <div className={styles.comicsContainer}>
        {comics.map((comic: ComicType) => (
          <Comic key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};

export default CharacterDetail;
