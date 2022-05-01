import type { Post } from "./models/Post";

export const samplePost: Post = {
  title: "Sample Post",
  tags: ["sample", "post", "testing"],
  isDraft: false,
  createdAt: new Date("April 29, 2022 03:24:00"),
  updatedAt: new Date("April 30, 2022 04:11:22"),
  content: `# Cool Post
  
  Some list:

  1. Hello
  1. Bye

  \`\`\`js
  console.log("Hello, world!");
  \`\`\`

  ## Sub Heading

  Some text is here.

  ### Another level

  Bullet list:

  * Item 1
  * Item 2`,
}
