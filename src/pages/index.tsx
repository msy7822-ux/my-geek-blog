import type { NextPage, GetStaticProps } from 'next';
import type { PropsType } from '../types/TopPageTypes';

import React from 'react';
import styles from '../styles/TopPage.module.css';
import { microcmsClient } from '../libs/microCMS';

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
    <div className={styles.container}>
      {/* ヘッダーを作成する */}
      {/* サイドバーとコンテナを横並びで配置する */}
      {/* サイドバーを作成する */}
      <div className="sidebar"></div>
      {/* トップページのコンテナ */}
      <div className="container">
        {/* トップページのサムネを配置する */}
        <img src="/images/prog_langs.png" alt="" />
      </div>

      {/* 記事一覧を配置する */}
      {articles?.contents?.map((article, key) => {
        // 下書きの記事を公開しない
        if (!('publishedAt' in article)) return true;
        const thumbnail = article.thumbnail ? article.thumbnail.url : undefined;

        return (
          <li key={key}>
            <a href={`/blogs/${article.id}`}>
              <div className={styles.imageContainer}>
                <img
                  alt="test image"
                  src={thumbnail || '/images/prog_img.jpg'}
                  width="200px"
                  height="100px"
                />
              </div>

              <div>title: {article.title}</div>
            </a>
          </li>
        );
      })}
    </div>
  );
};

export default TopPage;
