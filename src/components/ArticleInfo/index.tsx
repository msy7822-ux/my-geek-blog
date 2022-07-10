import Category from '@/components/Category';
import { getCreatesAtDate } from '@/utils/getCreatedAtDate';
import { ArticleType } from '@/types/types';

import styles from './styles.module.scss';

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
