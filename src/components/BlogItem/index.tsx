import type { ArticleType } from '@/types/types';
import ArticleInfo from '@/components/ArticleInfo';
import BlogThumbnail from '@/components/BlogThumbnail';

import styles from './styles.module.scss';

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
