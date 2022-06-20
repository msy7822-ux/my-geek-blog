import type { GetStaticProps } from 'next';
import { microcmsClient } from '../libs/microCMS';
import type { PropsType } from '../types/types';
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

export const useFetchBlogContents = () => {};
