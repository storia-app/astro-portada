import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "../site.config";
import { getPosts } from "../posts";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: new URL(`${base}/`, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${base}/blog/${post.id}/`,
    })),
  });
}
