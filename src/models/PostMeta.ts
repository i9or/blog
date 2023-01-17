import { Post } from "~/models/Post";

export type PostMeta = {
  title: Post["title"];
  slug: Post["slug"];
};
