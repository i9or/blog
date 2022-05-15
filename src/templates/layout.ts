type LayoutParams = {
  title?: string;
  body?: string;
  footer?: string;
};

export const layout = ({
  title = "Welcome!",
  body,
  footer = `© Copyright ${new Date().getFullYear()}`,
}: LayoutParams) => {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/public/main.css">
      <title>${title}</title>
    </head>
    <body class="body-container">
      <header class="header">
        <h1>Ignore this page!</h1>
      </header>
      <nav class="navigation">
        <span>Home</span>
        <span>About</span>
        <span>Now</span>
      </nav>
      <main class="main">
        <article>
          ${body}
        </article>
      </main>
      <aside class="sidebar">
        <section>
          <header>Recent posts</header>
          <ul>
            <li>Post 1</li>
            <li>Post 1</li>
            <li>Post 1</li>
          </ul>
        </section>
      </aside>
      <footer class="footer">
        ${footer}
      </footer>
    </body>
  </html>`;
};
