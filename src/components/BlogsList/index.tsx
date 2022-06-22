import type { ArticleType } from '@/types/types';
import BlogItem from '@/components/BlogItem/index';

import styles from './styles.module.scss';

const BlogsList = ({ articles }: { articles: ArticleType[] }) => {
  return (
    <div className={styles.articlesListContainer}>
      {articles?.map((article, key) => {
        return (
          <li className={styles.blogsList} key={key}>
            <BlogItem article={article} />
          </li>
        );
      })}
    </div>
  );
};

export default BlogsList;
