type TagsConstructor = {
  id?: number;
  postId?: number;
  tag: string;
  slug: string;
};

export class Tag {
  readonly id: number;
  readonly postId: number;
  readonly tag: string;
  readonly slug: string;

  constructor({ id = -1, postId = -1, tag, slug }: TagsConstructor) {
    this.id = id;
    this.postId = postId;
    this.tag = tag;
    this.slug = slug;
  }
}
