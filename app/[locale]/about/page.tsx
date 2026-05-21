import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import About from "@/components/containers/Home/About";
import ChooseArea from "@/components/containers/Home/ChooseArea";
import Brand from "@/components/containers/Home/Brand";
import Case from "@/components/containers/Home/Case";
import Testimonial from "@/components/containers/Home/Testimonial";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: { locale: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.common.meta.about.title,
    description: dict.common.meta.about.description,
    path: `/${locale}/about`,
  });
}

const page = ({ params }: PageProps) => {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <PageLayout>
      <CmnBanner title={dict.common.pages.aboutUs} />
      <About />
      <ChooseArea />
      <Brand />
      <Case />
      <Testimonial />
    </PageLayout>
  );
};

export default page;
