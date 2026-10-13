import { getCollection } from "astro:content";

/** Published posts, newest first. */
export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date, lang: string) {
  return date.toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
