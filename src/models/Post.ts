import dayjs, { Dayjs } from "dayjs";

type PostConstructor = {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  slug?: string;
  content: string;
  renderedContent?: string;
  tags: string[];
  isDraft: boolean;
};

export class Post {
  readonly id: number;
  // TODO: follow SQL schema, i.e. dates are Unix timestamps in seconds
  createdAt: Dayjs;
  // TODO: follow SQL schema, i.e. dates are Unix timestamps in seconds
  updatedAt: Dayjs;
  title: string;
  slug: string;
  content: string;
  renderedContent: string;
  tags: string[];
  isDraft: boolean;

  constructor({
    id = -1,
    createdAt,
    updatedAt,
    title,
    slug = "",
    content,
    renderedContent = "",
    tags,
    isDraft,
  }: PostConstructor) {
    this.id = id;
    this.createdAt = createdAt ? dayjs(createdAt) : dayjs();
    this.updatedAt = updatedAt ? dayjs(updatedAt) : dayjs();
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.renderedContent = renderedContent;
    this.tags = tags;
    this.isDraft = isDraft;
  }
}
