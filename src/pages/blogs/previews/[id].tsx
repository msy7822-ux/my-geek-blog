import { useLayoutEffect, useState, useMemo } from 'react';
import { microcmsClient } from '../../../libs/microCMS';
import type { ArticleType } from '../../../types/TopPageTypes';
import type { GetStaticProps, GetServerSideProps } from 'next';
// import { getStaticProps } from '../../index';

// https://maku.blog/p/rdq3ep2/
// この記事を見て修正するんじゃ
// export const getServersideProps: GetServerSideProps = async (context) => {
//   console.log(context);
//   return {
//     props: {
//       names: { id: 1 },
//     },
//   };
// };

const BlogPreview = () => {
  const [article, setArticle] = useState<ArticleType>({} as ArticleType);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // URLから取得できるcontentIDとdraftKeyをメモ化することで、基本的にはURLが変わらない限りfetchが走らないようにする。
  const contentId = useMemo(() => {
    return typeof window !== 'undefined'
      ? // TODO: ライブラリでシンプルに書き直したい
        location.pathname.split('/').slice(-1)[0]
      : '';
  }, []);

  const draftKey = useMemo(() => {
    return typeof window !== 'undefined'
      ? // TODO: ライブラリでシンプルに書き直したい
        location.search.slice(1).split('=')[1]
      : '';
  }, []);

  console.log(contentId);
  console.log(draftKey);

  useLayoutEffect(() => {
    setIsFetching(true);
    microcmsClient
      .get({ endpoint: `blog/${contentId}?draftKey=${draftKey}` })
      .then((res) => {
        setIsFetching(false);
        setArticle(res);
        console.log(res);
        return res;
      })
      .catch((err) => {
        setIsFetching(false);
        console.log(err);
      });
  }, [contentId, draftKey]);

  if (isFetching) return <>fetching....</>;

  return (
    <>
      {/* htmlパースしたい */}
      <div className="title">{article?.title}</div>
      {/* <div className="body">{article?.body}</div> */}
      <div dangerouslySetInnerHTML={{ __html: article?.body }} />
      <div className="created_at">{article?.createdAt}</div>
    </>
  );
};

export default BlogPreview;
