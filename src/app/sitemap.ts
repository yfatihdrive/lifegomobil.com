import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site";
import { PRODUCTS } from "@/data/products";
import { SECTORS } from "@/data/sectors";
import { getPublishedPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.domain;
  const now = new Date();

  const staticRoutes = [
    "",
    "/urunler",
    "/arac-takip",
    "/bireysel-arac-takip",
    "/motosiklet-takip",
    "/karavan-takip",
    "/yat-ve-tekne-takip",
    "/mobil-kamera-sistemleri",
    "/cozumler",
    "/platform",
    "/sistem-ozellikleri",
    "/u-etds-entegrasyonu",
    "/api-ve-entegrasyon",
    "/blog",
    "/hakkimizda",
    "/referanslar",
    "/iletisim",
    "/kvkk",
    "/garanti-ve-iade",
    "/kullanim-kosullari",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/blog" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : ["/arac-takip", "/bireysel-arac-takip", "/urunler", "/blog"].includes(route) ? 0.9 : 0.75,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${base}/urunler/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const sectorRoutes = SECTORS.map((s) => ({
    url: `${base}/cozumler/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Automatically adds 1 new blog post per day starting 01.12.2026!
  const blogRoutes = getPublishedPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishDate}T00:00:00+03:00`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...sectorRoutes, ...blogRoutes];
}
