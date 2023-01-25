const dictionary = {
  "C++": "cpp",
};

export const toSlug = (text: string) => {
  let slug = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  for (const [from, to] of Object.entries(dictionary)) {
    slug = slug.replace(from, to);
  }

  slug = slug.toLowerCase();
  slug = slug.replace(/\s+/g, "-");
  slug = slug.replace(/[^a-z0-9-]/gi, "");

  return slug;
};
