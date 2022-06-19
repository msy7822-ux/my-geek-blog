import type { ArticleType } from '../../types/TopPageTypes';
import styles from './styles.module.scss';
import BlogItem from '../BlogItem/index';

const BlogsList = ({ articles }: { articles: ArticleType[] }) => {
  return (
    <>
      {articles?.map((article, key) => {
        return (
          <li className={styles.blogsList} key={key}>
            <BlogItem article={article} />
          </li>
        );
      })}
    </>
  );
};

export default BlogsList;
