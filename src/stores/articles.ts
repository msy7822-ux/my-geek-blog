// microCMSからfetchした結果や、タグ検索した結果を保持する
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import type { ArticleType } from '@/types/types';

const { persistAtom } = recoilPersist();

export const gArticles = atom({
  key: 'global Articles',
  default: [] as ArticleType[],
  effects_UNSTABLE: [persistAtom],
});
