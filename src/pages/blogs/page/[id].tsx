import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import React, { useContext } from 'react';

import { microcmsClient } from '@/libs/microCMS';
import { articlesContext } from '@/pages/_app';
import Container from 'components/Container';
import BlogsList from 'components/BlogsList';
import Profile from 'components/Profile';
import Sidebar from 'components/Sidebar';
import Pagination from '@/components/Pagination';
import type { ArticlesType } from '@/types/types';
import styles from 'styles/pages/TopPage/styles.module.scss';

const PER_PAGE = 5;

// paginationの結果の、特定の数の記事を表示するページ(構成はほぼトップページと大差ない)
const PaginatedArticles: NextPage<{ articles: ArticlesType }> = ({
  articles,
}: {
  articles: ArticlesType;
}) => {
  const { articles: allArticles } = useContext(articlesContext);

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
          <BlogsList articles={articles?.contents} />
        </div>

        <div className={styles.sidebar}>
          <Profile />
          <Sidebar articles={allArticles} />
        </div>
      </div>

      <div className={styles.pagenation}>
        <Pagination totalCount={articles?.totalCount} />
      </div>
    </Container>
  );
};

// 動的なページのパスを生成
export const getStaticPaths: GetStaticPaths = async () => {
  const fetchedArticles = await microcmsClient.get({ endpoint: 'blog' });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(fetchedArticles.totalCount / PER_PAGE)).map(
    (article) => `/blogs/page/${article}`,
  );

  // 可能性のあるパスを返す（getStaticProps側で受け取ることができる）
  return { paths, fallback: false };
};

// データを取得する
export const getStaticProps: GetStaticProps = async (context) => {
  const articleId = context.params?.id as string;
  const offset = articleId ? parseInt(articleId, 10) - 1 : 0;

  const fetchedArticles = await microcmsClient.get({
    endpoint: 'blog',
    queries: { offset: offset * 5, limit: 5 },
  });

  return {
    props: {
      articles: fetchedArticles,
    },
  };
};

export default PaginatedArticles;
