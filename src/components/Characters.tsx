"use client";
import styles from "../styles/characters.module.css";

import { useEffect } from "react";
import { Character } from "@/types";
import { useCountContext } from "@/context/CountContext";
import { CharacterCard } from "./CharacterCard";
import { SearchBar } from "./SearchBar";
const favoriteUrl = "/favorites";
type CharacterPropTypes = {
  characters: Character[];
  count: number;
  pathName?: string;
};

const Characters = ({ characters, count, pathName }: CharacterPropTypes) => {
  const { setCount } = useCountContext();

  const isFavoritePage = pathName == favoriteUrl;

  useEffect(() => {
    setCount(count);
  }, [setCount, count]);

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
