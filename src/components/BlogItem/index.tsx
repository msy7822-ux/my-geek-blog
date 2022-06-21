import { ArticleType } from '../../types/types';
import styles from './styles.module.scss';

import ArticleInfo from '../ArticleInfo';
import BlogThumbnail from '../BlogThumbnail';

const BlogItem = ({ article }: { article: ArticleType }) => {
  const thumbnail = article.thumbnail ? article.thumbnail.url : undefined;
  return (
    <a href={`/blogs/${article.id}`} className={styles.blogItemContainer}>
      <BlogThumbnail thumbnail={thumbnail} />
      <ArticleInfo article={article} />
    </a>
  );
};

export default BlogItem;
