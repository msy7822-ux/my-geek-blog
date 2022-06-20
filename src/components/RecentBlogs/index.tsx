import { ArticlesType } from '../../types/types';
import styles from './styles.module.scss';
import { RiArticleFill } from 'react-icons/ri';

const RecentBlogs = ({ articles }: { articles: ArticlesType }) => {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.icon}>
          <RiArticleFill />
        </div>
        <p className={styles.titleText}>最近の記事</p>
      </div>
      {articles?.contents?.map((article, i) => {
        // 記事数が多くなってきたら、下記の条件を復元する
        // if (i >= 5) return;

        return (
          <li key={i}>
            <a
              className={styles.recentArticle}
              href={`/blogs/previews/${article?.id}`}
            >
              <img
                src={article?.thumbnail?.url || '/images/prog_img.jpg'}
                alt=""
                className={styles.thumbnail}
              />
              <p className={styles.articleTitle}>{article?.title}</p>
            </a>

            <div className={styles.tags}>
              {article?.tags?.map((tag, i) => {
                return (
                  <p key={i} className={styles.tag}>
                    {tag}
                  </p>
                );
              })}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default RecentBlogs;
