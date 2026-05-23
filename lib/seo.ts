import type { Metadata } from "next";

export const siteConfig = {
  name: "Charlie Unicorn AI",
  legalName:
    "CHARLIE UNICORN AI SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://charlieunicornai.eu",
  description:
    "Charlie Unicorn AI builds web and mobile apps, blockchain platforms, AI solutions, and Unreal Engine 5 games. Book a consultancy for your next digital product.",
  locale: "en_GB",
  email: "team@charlieunicornai.eu",
  phone: "+48504412991",
  phoneDisplay: "+48 504 412 991",
  address: {
    street: "Kasztanowa Street 17/1",
    postalCode: "76-015",
    city: "Manowo",
    country: "Poland",
  },
  openingHours: "Mo-Fr 09:00-17:00",
  defaultOgImage: "/images/banner/banner-two-image1.jpg",
} as const;

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.defaultOgImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const pageTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const canonical = absoluteUrl(path);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : absoluteUrl(image),
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image.startsWith("http") ? image : absoluteUrl(image)],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDisplay,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English", "Polish"],
      hoursAvailable: siteConfig.openingHours,
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
