import type { NextPage, GetServerSideProps } from 'next';
import 'highlight.js/styles/night-owl.css';

import type { ArticleType } from 'types/types';
import Container from 'components/Container';
import BlogPreview from 'components/BlogPreview';

import { convertStringToHtml } from '@/utils/covertStirngToHtml';
import { fetchArticlePreview } from '@/utils/fetchArticlePreview';

// NOTE: webpackとかmiddlewareとかのTypeError default is not function とかはcacheディレクトリ消すといいかも
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const urlString = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}${req?.url}` ??
      process.env.NEXT_PUBLIC_BASE_URL,
  );
  const contentId = urlString?.pathname?.split('/')?.slice(-1)[0];
  const draftKey = urlString?.searchParams?.get('draftKey') ?? '';

  const result = await fetchArticlePreview({ contentId, draftKey });

  return {
    props: {
      article: result ?? {},
      highLightHtml: convertStringToHtml(result.body),
      isError: !result,
    },
  };
};

const PreviewPage: NextPage<{
  article: ArticleType;
  highLightHtml: string;
  isError: boolean;
}> = ({
  article,
  highLightHtml,
  isError,
}: {
  article: ArticleType;
  highLightHtml: string;
  isError: boolean;
}) => {
  return (
    <Container>
      {isError ? (
        <div style={{ height: '75vh' }}>
          記事の取得に際して、問題が発生しました🙇‍♂️
          <br />
          リロードしてください🙏
        </div>
      ) : (
        <BlogPreview article={article} highlightHtml={highLightHtml} />
      )}
    </Container>
  );
};

export default PreviewPage;
