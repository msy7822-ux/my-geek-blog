import { GrSearch } from 'react-icons/gr';
import { AiOutlineFileSearch } from 'react-icons/ai';

import styles from './styles.module.scss';

const SearchBar = () => {
  return (
    <li className={styles.searchBarContainer}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <AiOutlineFileSearch />
        </div>
        <p>タグで検索</p>
      </div>
      <br />
      <div className={styles.searchBar}>
        <label htmlFor="search" className={styles.icon}>
          <GrSearch />
        </label>
        <input
          className={styles.searchBarInput}
          type="text"
          name="search"
          id="search"
          placeholder="例：React"
        />
      </div>
    </li>
  );
};

export default SearchBar;
