import type { NextPage, GetStaticProps } from 'next';
import type { PropsType } from '../types/types';

import React from 'react';
import { microcmsClient } from '../libs/microCMS';
import styles from '../styles/pages/TopPage/styles.module.scss';

import Container from '../components/Container';
import BlogsList from '../components/BlogsList';
import Profile from '../components/Profile';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RecentBlogs from '../components/RecentBlogs';

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
        <div className={styles.blogListSection}>
          <BlogsList articles={articles?.contents} />
        </div>
        {/* サイドバー */}
        <aside className={styles.sidebar}>
          <nav>
            <ul className={styles.sidebarList}>
              <SearchBar />
              <Categories />
              <RecentBlogs articles={articles} />
            </ul>
          </nav>
        </aside>
      </div>
    </Container>
  );
};

export default TopPage;
