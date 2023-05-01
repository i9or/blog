type RouteDetails = {
  path: string;
  title: string;
};

type RoutesMap<T extends string> = {
  readonly [k in T]: Readonly<RouteDetails>;
};

function defineRoutes<T extends string>(m: RoutesMap<T>) {
  return m;
}

export const ROUTES = defineRoutes({
  home: {
    path: "",
    title: "Home",
  },
  about: {
    path: "about",
    title: "About",
  },
  now: {
    path: "now",
    title: "Now!",
  },
  rss: {
    path: "feed",
    title: "RSS Feed",
  },
  archive: {
    path: "archive",
    title: "Archive",
  },
  tag: {
    path: "tag",
    title: "Tag",
  },
  post: {
    path: "post",
    title: "",
  },
  privacyPolicy: {
    path: "privacy",
    title: "Privacy Policy",
  },
});

export const SERVER_PORT = 4000;
export const WSS_PORT = SERVER_PORT + 1;

export const BLOG_TITLE = "Ignore This Page";
