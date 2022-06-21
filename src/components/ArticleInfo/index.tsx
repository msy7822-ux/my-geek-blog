import Category from '../Category';
import { getCreatesAtDate } from '../../utils/getCreatedAtDate';
import styles from './styles.module.scss';
import { ArticleType } from '../../types/types';

const ArticleInfo = ({ article }: { article: ArticleType }) => {
  return (
    <div className={styles.articleInfo}>
      <p className={styles.articleTitle}>{article.title}</p>
      <p className={styles.createdAt}>{getCreatesAtDate(article.createdAt)}</p>
      {article?.tags?.map((tag, i) => {
        return (
          <span className={styles.tag} key={i}>
            <Category category={tag} />
          </span>
        );
      })}
    </div>
  );
};

export default ArticleInfo;
