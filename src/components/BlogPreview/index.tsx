import type { ArticleType } from '../../types/TopPageTypes';
import { getCreatesAtDate } from '../../utils/getCreatedAtDate';
import { giveAttributeToBody } from '../../utils/giveAttributeToBody';

import Profile from '../Profile';
import Categories from '../Categories';

import styles from './styles.module.scss';

const BlogPreview = ({
  article,
  highlightHtml,
}: {
  article: ArticleType;
  highlightHtml: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentBody}>
        <div>
          <img
            className={styles.thumbnail}
            src={article?.thumbnail?.url}
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
              <Categories />
              <p>最近の記事</p>
              <li>
                <p>title1</p>
                <p>
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                </p>
              </li>
              <li>
                <p>title1</p>
                <p>
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                </p>
              </li>
              <li>
                <p>title1</p>
                <p>
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト サンプルテキスト
                </p>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default BlogPreview;
