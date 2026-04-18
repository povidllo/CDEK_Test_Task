export interface News {
  id: string;
  title: string;
  cover: {
    type: string;
    images: [
      {
        s: string;
        m: string;
        l: string;
        hd: string;
      },
    ];
  };
  likeCount: number;
  viewCount: number;
  publishedAt: string;
  rubrics: [
    {
      id: number;
      slug: string;
      name: string;
    },
  ];
}

export type NewsComponentType = 'company' | 'business'

export interface GetNewsResponseType {
  totalPages: number;
  perPage: number;
  news: News[];
  minDatePublication: string;
}
