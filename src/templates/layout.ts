type LayoutParams = {
  title?: string;
  breadCrumbs?: string[]; // TODO: should be an array of url/text objects
  body?: string;
  footer?: string;
}

const renderBreadCrumbs = (breadCrumbs?: string[]) => {
  return breadCrumbs?.map(b => `/ ${b} `);
}

export const layout = ({ title = "Welcome!", breadCrumbs, body, footer = `© Copyright ${new Date().getFullYear()}` }: LayoutParams) => {
  return `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      ${renderBreadCrumbs(breadCrumbs) ?? ""}
      <main>
        ${body}
      </main>
      <footer>
        ${footer}
      </footer>
    </body>
  </html>`
}
