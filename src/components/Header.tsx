"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "../styles/header.module.css";
import { useEffect, useState } from "react";
import { useFavoriteContext } from "@/context/FavoriteContext";

export const Header = () => {
  const { favorites } = useFavoriteContext();
  const [numberOfFavorites, setNumberOfFavorites] = useState(0);

  useEffect(() => {
    if (favorites && favorites.length > 0) {
      setNumberOfFavorites(favorites.length);
    } else if (favorites.length == 0) {
      setNumberOfFavorites(0);
    }
  }, [favorites, setNumberOfFavorites]);
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
          src="/marvelLogo.svg"
          alt="Marvel Logo"
          width={130}
          height={52}
          priority
        />
      </Link>
      <Link className={styles.favoriteWrapper} href="/favorites">
        <Image
          src="/favorite.svg"
          alt="Favorite Icon"
          width={24}
          height={22}
          priority
        />
        <p className={styles.numberOfFavorites}>{numberOfFavorites}</p>
      </Link>
    </div>
  );
};
