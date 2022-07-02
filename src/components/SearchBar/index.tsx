import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import styles from './styles.module.scss';

const SearchBar = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setCanSubmit(searchInputValue.length > 0);
  }, [searchInputValue]);

  const handleChangeSearchTag = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value: tag } = event.target;
    setSearchInputValue(tag);
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <AiOutlineFileSearch />
        </div>
        <p>キーワードで検索</p>
      </div>
      <br />
      <div className={styles.searchBar}>
        <input
          className={styles.searchBarInput}
          type="text"
          name="search"
          id="search"
          placeholder="例：React"
          onChange={handleChangeSearchTag}
        />
        <Link href={`/blogs/search?keyword=${searchInputValue}`}>
          <button
            disabled={!canSubmit}
            type="button"
            className={styles.searchBtn}
          >
            {/* 検索 */}
            <FaSearch className={styles.searchIcon} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
