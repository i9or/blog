export type Tag = {
  slug: string;
  text: string;
};

export type Post = {
  content: string;
  createdAt: number;
  slug: string;
  title: string;
  tags: Tag[];
  isDraft: boolean;
};

export type PostMeta = Pick<Post, "title" | "slug" | "createdAt">;
