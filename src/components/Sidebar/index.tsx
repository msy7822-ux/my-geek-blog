import SearchBar from '@/components/SearchBar';
import Categories from '@/components/Categories';
import RecentBlogs from '@/components/RecentBlogs';

import type { ArticlesType } from '@/types/types';

import styles from './styles.module.scss';

const Sidebar = ({ articles }: { articles: ArticlesType }) => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <div className={styles.sidebarList}>
          <SearchBar />
          <Categories />
          <RecentBlogs articles={articles} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
