import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceSingle from "@/components/containers/service/ServiceSingle";
import { serviceSlugs } from "@/data/serviceAssets";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocalizedService } from "@/lib/i18n/localized-data";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return serviceSlugs.flatMap((slug) =>
    ["en", "pl"].map((locale) => ({ locale, slug }))
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const service = getLocalizedService(locale, params.slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/${locale}/service-details/${service.slug}`,
  });
}

const page = ({ params }: PageProps) => {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const service = getLocalizedService(locale, params.slug);

  if (!service) {
    notFound();
  }

  return (
    <PageLayout>
      <CmnBanner title={service.title} />
      <ServiceSingle service={service} />
    </PageLayout>
  );
};

export default page;
