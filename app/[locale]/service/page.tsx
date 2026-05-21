import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceItems from "@/components/containers/service/ServiceItems";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: { locale: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.common.meta.services.title,
    description: dict.common.meta.services.description,
    path: `/${locale}/service`,
  });
}

const page = ({ params }: PageProps) => {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <PageLayout>
      <CmnBanner title={dict.common.pages.itServices} />
      <ServiceItems />
    </PageLayout>
  );
};

export default page;
