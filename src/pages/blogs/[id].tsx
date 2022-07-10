import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { microcmsClient } from '@/libs/microCMS';
import type { ArticleType } from '@/types/types';
import { convertStringToHtml } from '@/utils/covertStirngToHtml';

import Container from '@/components/Container';
import BlogDetail from '@/components/BlogDetail';

const BlogPage: NextPage<{ article: ArticleType; highlightHtml: string }> = ({
  article,
  highlightHtml,
}: {
  article: ArticleType;
  highlightHtml: string;
}) => {
  return (
    <Container>
      <BlogDetail article={article} highlightHtml={highlightHtml} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fetchedArticles = await microcmsClient.get({ endpoint: 'blog' });
  const paths = fetchedArticles.contents.map(
    (article: ArticleType) => `/blogs/${article.id}`,
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id?.toString();

  const fetchedArticle = await microcmsClient.get({
    endpoint: 'blog',
    contentId: id,
  });

  return {
    props: {
      article: fetchedArticle,
      highlightHtml: convertStringToHtml(fetchedArticle.body),
    },
  };
};

export default BlogPage;
