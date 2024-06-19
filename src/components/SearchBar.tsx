'use client';

import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styles from '../styles/searchBar.module.css';
import { useCountContext } from '@/context/CountContext';
import { useRouter, usePathname } from 'next/navigation';
import { Search } from './Icons/Search';
import { getSearchQuery } from '../../utils/help';

export const SearchBar = () => {
  const pathname = usePathname();

  const [querySearch, setQuerySearch] = useState(getSearchQuery(pathname));
  const router = useRouter();

  const handleSearch = useDebouncedCallback(() => {
    if (querySearch.trim() != '') {
      router.push(`/searches/${querySearch}`);
    }
  }, 500);

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
