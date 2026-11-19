import { BLOG_POSTS_PART1 } from "@/data/blog-posts-part1";
import { BLOG_POSTS_PART2 } from "@/data/blog-posts-part2";

export interface BlogImage {
  src: string;
  alt: string;
  caption: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image?: BlogImage;
}

export interface BlogLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  quickAnswer: string;
  category: string;
  publishDate: string; // YYYY-MM-DD (Europe/Istanbul)
  author: string;
  readTimeMinutes: number;
  keywords: string[];
  coverImage: BlogImage;
  sections: BlogSection[]; // Includes 2 inline images -> total 3 images per article
  internalLinks: BlogLink[];
  externalLinks: BlogLink[];
  faqs: { question: string; answer: string }[];
}

export const ALL_BLOG_POSTS: BlogPost[] = [
  ...BLOG_POSTS_PART1,
  ...BLOG_POSTS_PART2,
].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

/**
 * Returns current date in YYYY-MM-DD format according to Europe/Istanbul timezone.
 */
export function getTodayIstanbulISO(): string {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(new Date());
}

/**
 * Determines whether a post is automatically published as of today (TR timezone).
 * Posts dated 2026-12-01, 2026-12-02, ... automatically unlock 1 per day!
 */
export function isPostPublished(post: BlogPost, referenceDateISO?: string): boolean {
  const today = referenceDateISO ?? getTodayIstanbulISO();
  return post.publishDate <= today;
}

export function getPublishedPosts(referenceDateISO?: string): BlogPost[] {
  const today = referenceDateISO ?? getTodayIstanbulISO();
  return ALL_BLOG_POSTS.filter((p) => p.publishDate <= today).sort((a, b) =>
    a.publishDate > b.publishDate ? -1 : 1
  );
}

export function getScheduledPosts(referenceDateISO?: string): BlogPost[] {
  const today = referenceDateISO ?? getTodayIstanbulISO();
  return ALL_BLOG_POSTS.filter((p) => p.publishDate > today).sort((a, b) =>
    a.publishDate < b.publishDate ? -1 : 1
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatTurkishDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function estimateWordCount(post: BlogPost): number {
  const textParts = [
    post.title,
    post.excerpt,
    post.quickAnswer,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.bullets ?? []),
    ]),
    ...post.faqs.flatMap((f) => [f.question, f.answer]),
  ];
  return textParts
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
