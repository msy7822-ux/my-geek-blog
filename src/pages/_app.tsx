import React, { useState, createContext } from 'react';
import { RecoilRoot } from 'recoil';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';

import { microcmsClient } from '@/libs/microCMS';
import type { ArticlesType } from '@/types/types';

type InitialPropsType = {
  initialProps: {
    articles: ArticlesType;
  };
};

type InitialContextType = {
  articles: ArticlesType;
};

export const articlesContext = createContext<InitialContextType>(
  {} as InitialContextType,
);
function MyApp({
  Component,
  pageProps,
  initialProps,
}: AppProps & InitialPropsType) {
  // レンダリング初期にmicroCMSからフェチしたデータだけcontextで管理するのいキメェな
  const [initArticles, _] = useState<{ articles: ArticlesType }>(
    initialProps ?? {},
  );

  return (
    <RecoilRoot>
      <articlesContext.Provider value={initArticles}>
        <Component {...pageProps} />
      </articlesContext.Provider>
    </RecoilRoot>
  );
}

MyApp.getInitialProps = async () => {
  const articles = await microcmsClient
    .get({
      endpoint: 'blog',
      queries: { limit: 20, offset: 0, filters: 'isPublished[equals]true' },
    })
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
