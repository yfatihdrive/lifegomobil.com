import { SITE_CONFIG } from "@/lib/site";
import { getPublishedPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = getPublishedPosts();

  const itemsXml = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_CONFIG.domain}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.domain}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.publishDate}T00:00:00+03:00`).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category><![CDATA[${post.category}]]></category>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} Blog &amp; Araç Takip Rehberi</title>
    <link>${SITE_CONFIG.domain}/blog</link>
    <description>${SITE_CONFIG.description}</description>
    <language>tr-TR</language>
    <atom:link href="${SITE_CONFIG.domain}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
