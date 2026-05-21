import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactContent from "@/components/containers/contact/ContactContent";
import ContactMap from "@/components/containers/contact/ContactMap";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: { locale: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.common.meta.contact.title,
    description: dict.common.meta.contact.description,
    path: `/${locale}/contact`,
  });
}

const page = ({ params }: PageProps) => {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <PageLayout>
      <CmnBanner title={dict.common.pages.contactUs} />
      <ContactContent />
      <ContactMap />
    </PageLayout>
  );
};

export default page;
