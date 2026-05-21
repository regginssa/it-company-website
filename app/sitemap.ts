import type { MetadataRoute } from "next";
import { portfolioSlugs } from "@/data/portfolioAssets";
import { serviceSlugs } from "@/data/serviceAssets";
import { locales } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/seo";

const staticPaths = ["", "/about", "/service", "/case", "/contact", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: absoluteUrl(path === "" ? `/${locale}` : `/${locale}${path}`),
        lastModified,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      });
    }

    for (const slug of serviceSlugs) {
      entries.push({
        url: absoluteUrl(`/${locale}/service-details/${slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of portfolioSlugs) {
      entries.push({
        url: absoluteUrl(`/${locale}/case-details/${slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
