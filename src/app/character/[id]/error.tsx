'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import styles from '../../../styles/error.module.css';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <h2>{error.message}</h2>
      <p>Please try another id</p>
    </div>
  );
}
