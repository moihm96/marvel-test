/* eslint-disable @next/next/no-img-element */
"use-client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/characterCard.module.css";

import { useState, useEffect } from "react";
import { useFavoriteContext } from "@/context/FavoriteContext";
import { FavIConOff } from "./FavIconOff";
import { FavIconOn } from "./FavIconOn";
import { Character } from "@/types";

export const CharacterCard = ({ character }: { character: Character }) => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteContext();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(character));
  }, [favorites, character]);

  const handleFavorites = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div key={character.id} className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={`/character/${character.id}`}>
          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width="188"
            height="190"
            className={styles.responsiveImage}
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
