export type Post = {
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  tags: string[];
  isDraft: boolean;
};
