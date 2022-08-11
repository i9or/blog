import type { Post } from "./models/Post";

export const samplePost: Post = {
  title: "Sample Post",
  tags: ["sample", "post", "testing"],
  isDraft: false,
  createdAt: new Date("April 29, 2022 03:24:00"),
  updatedAt: new Date("April 30, 2022 04:11:22"),
  content: `# Wells Cathedral
  
  Wells Cathedral is an Anglican cathedral in Wells, Somerset, commenced around 1175 on the site of a late-Roman mausoleum and an 8th-century abbey church.
  The cathedral has been described by the architectural historian John Harvey as Europe's first truly Gothic structure, lacking the Romanesque work that survives in many other cathedrals.
  It is the seat of the bishop of Bath and Wells.
  This photograph depicts the St Andrew's Cross arches under the tower, viewed from the nave.
  
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
