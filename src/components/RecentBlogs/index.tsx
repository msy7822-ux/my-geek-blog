import { RiArticleFill } from 'react-icons/ri';
import { ArticlesType } from '@/types/types';
import Category from '@/components/Category';

import styles from './styles.module.scss';

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
                  <p key={i}>
                    <Category category={tag} />
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
