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

  \`\`\`ts {"line": [3, 4, 5], "otherOption": "hello"}
  const Foo = (name: string) => {
    console.log(\`Hello, \${name}!\`);
  }
  \`\`\`

  ## Sub Heading

  Some text is here.

  \`\`\`c
  #include <stdio.h>

  int main() {
    printf("Hello, World!\\n");

    return 0;
  }
  \`\`\`

  ### Another level

  Bullet list:

  * Item 1
  * Item 2`,
};
