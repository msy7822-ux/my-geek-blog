import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { microcmsClient } from '../libs/microCMS';
import type { ArticlesType } from '../types/types';
import { useState, createContext } from 'react';
type InitialPropsType = {
  initialProps: {
    articles: ArticlesType;
  };
};

export const articlesContext = createContext({} as { articles: ArticlesType });
function MyApp({
  Component,
  pageProps,
  initialProps,
}: AppProps & InitialPropsType) {
  const [initArticles, _] = useState<{ articles: ArticlesType }>(initialProps);

  return (
    <articlesContext.Provider value={initArticles}>
      <Component {...pageProps} />
    </articlesContext.Provider>
  );
}

MyApp.getInitialProps = async () => {
  const articles = await microcmsClient
    .get({ endpoint: 'blog' })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    initialProps: {
      articles: articles,
    },
  };
};

export default MyApp;
