import type { NextPage, GetServerSideProps } from 'next';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';

import { microcmsClient } from 'libs/microCMS';
import type { ArticleType } from 'types/types';
import Container from 'components/Container';
import BlogPreview from 'components/BlogPreview';

// NOTE: webpackとかmiddlewareとかのTypeError default is not function とかはcacheディレクトリ消すといいかも

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const urlString = new URL(
    `http://localhost:3000${req?.url}` ?? 'http://localhost:3000',
  );
  const contentId = urlString?.pathname?.split('/')?.slice(-1)[0];
  const draftKey = urlString?.searchParams?.get('draftKey');

  const result = await microcmsClient
    .get({ endpoint: `blog/${contentId}?draftKey=${draftKey}` })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('contentId -> ', contentId);
      console.log('draftKey -> ', draftKey);
      console.log('errorの内容 -> ', err);
      return false;
    });

  // codeブロックのハイライト化
  const $ = cheerio.load(result?.body ?? '<div></div>');
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      article: result ?? {},
      highLightHtml: $.html(),
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
