import { microcmsClient } from '../../../libs/microCMS';
import type { ArticleType } from '../../../types/TopPageTypes';
import Container from '../../../components/Container';
import BlogPreview from '../../../components/BlogPreview';
import type { NextPage, GetServerSideProps } from 'next';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';

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
      console.log(err);
    });

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
    },
  };
};

const PreviewPage: NextPage<{
  article: ArticleType;
  highLightHtml: string;
}> = ({
  article,
  highLightHtml,
}: {
  article: ArticleType;
  highLightHtml: string;
}) => {
  return (
    <Container>
      <BlogPreview article={article} highlightHtml={highLightHtml} />
    </Container>
  );
};

export default PreviewPage;
