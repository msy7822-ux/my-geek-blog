import type { NextPage } from 'next';

import React, { useContext } from 'react';
import { articlesContext } from './_app';
import styles from '../styles/pages/TopPage/styles.module.scss';

import Container from '../components/Container';
import BlogsList from '../components/BlogsList';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';

const TopPage: NextPage = () => {
  const { articles } = useContext(articlesContext);

  return (
    <Container>
      <div className={styles.topPageContainer}>
        {/* コンテンツトップ */}
        <div className={styles.contents}>
          <img
            src="/images/prog_langs.png"
            alt=""
            className={styles.topThumbnail}
          />
          <BlogsList articles={articles?.contents} />
        </div>

        {/* サイドバー */}
        <div className={styles.sidebar}>
          <Profile />
          <Sidebar articles={articles} />
        </div>
      </div>
    </Container>
  );
};

export default TopPage;
