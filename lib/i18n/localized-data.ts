import type { PortfolioCase } from "@/data/portfolioCases";
import type { ServiceFaq, ServiceItem } from "@/lib/i18n/types";
import type { TestimonialItem } from "@/data/testimonials";
import { serviceAssets } from "@/data/serviceAssets";
import { portfolioAssets } from "@/data/portfolioAssets";
import { testimonialImages } from "@/data/testimonials";
import type { Locale } from "./config";
import { getDictionary } from "./get-dictionary";
import {
  portfolioSlugToContentKey,
  serviceSlugToContentKey,
} from "./content-keys";

export function getLocalizedServices(locale: Locale): ServiceItem[] {
  const dict = getDictionary(locale);

  return serviceAssets.map((asset) => {
    const key =
      serviceSlugToContentKey[
        asset.slug as keyof typeof serviceSlugToContentKey
      ];
    const content = dict.services[key];

    return {
      slug: asset.slug,
      title: content.title,
      summary: content.summary,
      description: content.description,
      descriptionExtra: content.descriptionExtra,
      benefits: [...content.benefits],
      faqs: content.faqs.map((faq) => ({ ...faq })) as ServiceFaq[],
      image: asset.image,
      icon: asset.icon,
      detailSecondaryImage: asset.detailSecondaryImage,
    };
  });
}

export function getLocalizedService(
  locale: Locale,
  slug: string
): ServiceItem | undefined {
  return getLocalizedServices(locale).find((s) => s.slug === slug);
}

export function getLocalizedPortfolioCases(locale: Locale): PortfolioCase[] {
  const dict = getDictionary(locale);

  return portfolioAssets.map((asset) => {
    const key =
      portfolioSlugToContentKey[
        asset.slug as keyof typeof portfolioSlugToContentKey
      ];
    const content = dict.portfolio[key];

    return {
      slug: asset.slug,
      title: content.title,
      category: content.category,
      summary: content.summary,
      description: content.description,
      platforms: content.platforms,
      highlights: [...content.highlights],
      image: asset.image,
    };
  });
}

export function getLocalizedPortfolioCase(
  locale: Locale,
  slug: string
): PortfolioCase | undefined {
  return getLocalizedPortfolioCases(locale).find((c) => c.slug === slug);
}

export function getLocalizedTestimonials(locale: Locale): TestimonialItem[] {
  const dict = getDictionary(locale);

  return dict.testimonials.map((item, index) => ({
    quote: item.quote,
    name: item.name,
    role: item.role,
    image: testimonialImages[index],
  }));
}
