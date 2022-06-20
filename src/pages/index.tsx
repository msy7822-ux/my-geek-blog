import type { NextPage, GetStaticProps } from 'next';
import type { PropsType } from '../types/types';

import React from 'react';
import { microcmsClient } from '../libs/microCMS';
import styles from '../styles/pages/TopPage/styles.module.scss';

import Container from '../components/Container';
import BlogsList from '../components/BlogsList';
import Profile from '../components/Profile';

export const getStaticProps: GetStaticProps = async (context) => {
  const articles = await microcmsClient
    .get({ endpoint: 'blog' })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      articles: articles,
    },
  };
};

const TopPage: NextPage<PropsType> = (props: PropsType) => {
  const { articles } = props;
  console.log(articles);

  return (
    <Container>
      {/* トップページのページトップコンテンツ */}
      <div className={styles.pageTop}>
        {/* トップページのサムネを配置する */}
        <div className={styles.top}>
          <img
            src="/images/prog_langs.png"
            alt=""
            className={styles.topThumbnail}
          />
          <Profile />
        </div>
      </div>

      {/* トップページのコンテンツ */}
      <div className={styles.contents}>
        {/* TODO: レイアウト修正する */}
        {/* 記事一覧を配置する */}
        <div className={styles.blogListSection}>
          <BlogsList articles={articles?.contents} />
        </div>
        {/* サイドバー */}
        <aside className={styles.sidebar}>
          <nav>
            <ul className={styles.sidebarList}>
              <p>最近の記事</p>
              <li>
                <p>title1</p>
                <p>
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
                  サンプルテキスト サンプルテキスト サンプルテキスト
                  サンプルテキスト サンプルテキスト{' '}
                </p>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </Container>
  );
};

export default TopPage;
