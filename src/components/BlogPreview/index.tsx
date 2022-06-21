import type { ArticleType } from '../../types/types';
import { getCreatesAtDate } from '../../utils/getCreatedAtDate';
import { giveAttributeToBody } from '../../utils/giveAttributeToBody';
import { useContext } from 'react';
import { articlesContext } from '../../pages/_app';

import RecentBlogs from '../RecentBlogs';
import Profile from '../Profile';
import Categories from '../Categories';
import SearchBar from '../SearchBar';

import styles from './styles.module.scss';

const BlogPreview = ({
  article,
  highlightHtml,
}: {
  article: ArticleType;
  highlightHtml: string;
}) => {
  const { articles } = useContext(articlesContext);

  return (
    <div className={styles.container}>
      <div className={styles.contentBody}>
        <div>
          <img
            className={styles.thumbnail}
            src={article?.thumbnail?.url || '/images/prog_img.jpg'}
            alt=""
          />
        </div>
        <h1 className="title">{article?.title}</h1>
        <div className={styles.tags}>
          <p className={styles.createdDate}>
            {getCreatesAtDate(article?.createdAt)}
          </p>
          {article?.tags?.map((tag, i) => {
            return (
              <div key={i}>
                <p className={styles.tag}>{tag}</p>
              </div>
            );
          })}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: giveAttributeToBody(highlightHtml),
          }}
          className={styles.body}
        />
      </div>
      <div className={styles.sidebar}>
        <Profile />
        <aside>
          <nav>
            <ul className={styles.sidebarList}>
              <SearchBar />
              <Categories />
              <RecentBlogs articles={articles} />
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default BlogPreview;
