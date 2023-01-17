import dayjs from "dayjs";

type PostConstructor = {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  title: string;
  slug: string;
  content: string;
  isDraft: boolean;
};

export class Post {
  readonly id: number;
  title: string;
  slug: string;
  content: string;
  isDraft: boolean;
  readonly createdAt: number;
  updatedAt: number;

  constructor({
    id = -1,
    createdAt,
    updatedAt,
    title,
    slug = "",
    content,
    isDraft,
  }: PostConstructor) {
    this.id = id;
    this.createdAt = createdAt ?? dayjs().unix();
    this.updatedAt = updatedAt ?? dayjs().unix();
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.isDraft = isDraft;
  }
}
