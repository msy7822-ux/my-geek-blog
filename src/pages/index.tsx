import type { NextPage } from 'next';
import React, { useContext } from 'react';
// import { useMediaQuery } from 'react-response';

import { articlesContext } from '@/pages/_app';
import Container from '@/components/Container';
import BlogsList from '@/components/BlogsList';
import SidebarProfile from '@/components/SidebarProfile';
import Sidebar from '@/components/Sidebar';
import Pagination from '@/components/Pagination';

import styles from 'styles/pages/TopPage/styles.module.scss';

const TopPage: NextPage = () => {
  const { articles } = useContext(articlesContext);
  // const isMobileScreen: boolean = useMediaQuery({
  //   query: '(max-width: 1124px)',
  // });

  return (
    <Container>
      <div className={styles.topPageContainer}>
        <div className={styles.contents}>
          <img
            src="/images/prog_langs.png"
            alt=""
            className={styles.topThumbnail}
          />
          <h2>記事一覧</h2>
          <BlogsList articles={articles?.contents?.slice(0, 5)} />
        </div>

        {true && (
          <div className={styles.sidebar}>
            <SidebarProfile />
            <Sidebar articles={articles} />
          </div>
        )}
      </div>

      <div className={styles.pagination}>
        <Pagination totalCount={articles?.totalCount} />
      </div>
    </Container>
  );
};

export default TopPage;
