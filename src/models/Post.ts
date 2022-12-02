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
  createdAt: Date;
  updatedAt: Date;
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
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
    this.updatedAt = updatedAt ? new Date(updatedAt) : new Date();
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.renderedContent = renderedContent;
    this.tags = tags;
    this.isDraft = isDraft;
  }
}
