import Parser from "rss-parser";

export const FEEDS = [
    {
      slug: "darkreading",
      title: "Dark Reading",
      url: "https://www.darkreading.com/rss.xml",
      querySelect: ".ArticleBase-FeaturedImage",
      image: "ZsaZ2hEi_400x400.jpg",
    },
    {
      slug: "thehackersnews",
      title: "The Hacker News",
      url: "https://feeds.feedburner.com/TheHackersNews",
      querySelect: ".separator > a:nth-child(1)",
      image: "FLgHrLHy_400x400.jpg",
    },
    {
      slug: "recordedfuture",
      title: "Recorded Future",
      url: "https://www.recordedfuture.com/feed",
      querySelect: "img.z-10",
      image: "JtfeN2W2_400x400.png",
    },
    {
      slug: "wired",
      title: "Wired",
      url: "https://www.wired.com/feed/category/security/latest/rss",
      querySelect: "div",
      image: "YvWAQD2L_400x400.jpg",
    }
  ];

export async function getFeed(feedUrl: string) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}