import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Faq from "@/components/containers/Home/Faq";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Charlie Unicorn AI services, consultancy bookings, and how we work with clients.",
  path: "/faq",
});

const page = () => {
  return (
    <PageLayout>
      <CmnBanner title="FAQ" />
      <Faq />
    </PageLayout>
  );
};

export default page;
