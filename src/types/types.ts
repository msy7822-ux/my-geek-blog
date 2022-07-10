type ArticleType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
  isPublished: boolean;
  tags?: string[];
  thumbnail?: {
    height: number;
    url: string;
    width: number;
  };
  publishedAt?: string;
  revisedAt?: string;
};

type ArticlesType = {
  contents: ArticleType[];
  totalCount: number;
  offset: number;
  limit: number;
};

type PropsType = {
  articles: ArticlesType;
};

export type { ArticleType, ArticlesType, PropsType };
