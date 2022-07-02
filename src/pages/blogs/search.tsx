import React, { useContext, useEffect } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { articlesContext } from '@/pages/_app';
import BlogsList from '@/components/BlogsList';
import Container from '@/components/Container';
import Sidebar from '@/components/Sidebar';
import Profile from '@/components/Profile';
import { microcmsClient } from '@/libs/microCMS';
import type { ArticlesType } from '@/types/types';

import styles from '@/styles/pages/Search/styles.module.scss';

const Search: NextPage<{ result: ArticlesType }> = ({
  result,
}: {
  result: ArticlesType;
}) => {
  const { articles: fetchedArticles } = useContext(articlesContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <div className={styles.searchResultContainer}>
        <div className={styles.contents}>
          <h2>検索結果一覧</h2>
          <BlogsList articles={result.contents} />
        </div>

        <div className={styles.sidebar}>
          <Profile />
          <Sidebar articles={fetchedArticles} />
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pathString = context.req.url;
  const urlString = `http://localhost:3000${pathString}`;
  const keyword = new URL(urlString).searchParams.get('keyword');
  const tag = new URL(urlString).searchParams.get('tag');

  if (keyword) {
    const result = await microcmsClient.get({
      endpoint: `blog?q=${keyword}`,
    });

    return {
      props: {
        result: result,
      },
    };
  } else if (tag) {
    const result = await microcmsClient.get({
      endpoint: 'blog',
      queries: { filters: `tags[contains]${tag}` },
    });

    return {
      props: {
        result: result,
      },
    };
  }

  return {
    props: {
      result: {} as ArticlesType,
    },
  };
};

export default Search;
