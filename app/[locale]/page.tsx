import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Banner from "@/components/layout/banner/Banner";
import Brand from "@/components/containers/Home/Brand";
import About from "@/components/containers/Home/About";
import Service from "@/components/containers/Home/Service";
import ChooseArea from "@/components/containers/Home/ChooseArea";
import Faq from "@/components/containers/Home/Faq";
import Case from "@/components/containers/Home/Case";
import Testimonial from "@/components/containers/Home/Testimonial";
import Quote from "@/components/containers/Home/Quote";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: { locale: string };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return createPageMetadata({
    title: dict.common.meta.home.title,
    description: dict.common.meta.home.description,
    path: `/${locale}`,
  });
}

const page = ({ params }: PageProps) => {
  return (
    <PageLayout>
      <Banner />
      <Brand />
      <About />
      <Service />
      <ChooseArea />
      <Faq />
      <Case />
      <Testimonial />
      <Quote />
    </PageLayout>
  );
};

export default page;
