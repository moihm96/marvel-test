'use client';

import styles from '../styles/searchBar.module.css';
import { useCountContext } from '@/context/CountContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search } from './Icons/Search';

export const SearchBar = () => {
  const [querySearch, setQuerySearch] = useState('');
  const router = useRouter();

  const handleSearch = (event: { key: string }) => {
    if (event.key == 'Enter' && querySearch.trim() != '') {
      router.push(`/searches/${querySearch}`);
    }
  };

  const { count } = useCountContext();

  return (
    <div>
      <div className={styles.container}>
        <Search />
        <input
          value={querySearch}
          type="text"
          placeholder="SEARCH A CHARACTER..."
          onChange={(e) => setQuerySearch(e.target.value)}
          onKeyDown={handleSearch}
          className={styles.input}
        />
      </div>
      <p className={styles.results}>{count} results</p>
    </div>
  );
};
