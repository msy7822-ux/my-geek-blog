import { microcmsClient } from 'libs/microCMS';
// import type { ArticleType } from '@/types/types';

type PropsType = {
  contentId: string;
  draftKey: string;
};

export const fetchArticlePreview = async ({
  contentId,
  draftKey,
}: PropsType) => {
  if (!draftKey) return false;

  const result = await microcmsClient
    .get({ endpoint: `blog/${contentId}?draftKey=${draftKey}` })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return false;
    });

  return result;
};
