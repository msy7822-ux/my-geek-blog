import { ArticleType } from '../../types/TopPageTypes';
import styles from './styles.module.scss';
import { getCreatesAtDate } from '../../utils/getCreatedAtDate';

const BlogItem = ({ article }: { article: ArticleType }) => {
  const thumbnail = article.thumbnail ? article.thumbnail.url : undefined;
  return (
    <div>
      <a href={`/blogs/${article.id}`} className={styles.blogItemContainer}>
        <div>
          <img
            alt="test image"
            src={thumbnail || '/images/prog_img.jpg'}
            width="200px"
            height="100px"
          />
        </div>

        <div>
          <p>{article.title}</p>
          <span>{getCreatesAtDate(article.createdAt)}</span>
        </div>
      </a>
    </div>
  );
};

export default BlogItem;
