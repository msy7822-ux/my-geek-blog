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

type PropsType = {
  articles: {
    contents: ArticleType[];
    totalCount: number;
    offset: number;
    limit: number;
  };
};

export type { ArticleType, PropsType };
