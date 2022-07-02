import { useContext } from 'react';
import parse from 'html-react-parser';

import type { ArticleType } from '@/types/types';
import { getCreatesAtDate } from '@/utils/getCreatedAtDate';
import { convertHtmlTagToDiv } from '@/utils/convertHtmlTagToDiv';
import { articlesContext } from '@/pages/_app';

import Profile from '@/components/Profile';
import Sidebar from '@/components/Sidebar';

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
        <div className={styles.articleBodyContainer}>
          {parse(convertHtmlTagToDiv(highlightHtml))}
        </div>
      </div>
      <div className={styles.sidebar}>
        <Profile />
        <Sidebar articles={articles} />
      </div>
    </div>
  );
};

export default BlogPreview;
