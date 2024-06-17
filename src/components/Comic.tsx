import type { Comic } from "@/types";
import styles from "../styles/comic.module.css";

const Comic = ({ comic }: { comic: Comic }) => {
  return (
    <div key={comic.id} className={styles.comicContainer}>
      <div className={styles.imageContainer}>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width="320"
          height="320"
          className="responsiveImage"
        />
      </div>
      <p className={styles.title}>
        <b>{comic.title}</b>
      </p>
    </div>
  );
};

export default Comic;
