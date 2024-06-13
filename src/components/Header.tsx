import Image from "next/image";
import Link from "next/link";

import styles from "../styles/header.module.css";

export const Header = () => {
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
        <p className={styles.numberOfFavorites}>0</p>
      </Link>
    </div>
  );
};
