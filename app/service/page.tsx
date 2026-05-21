import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceItems from "@/components/containers/service/ServiceItems";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "IT Services",
  description:
    "Explore Charlie Unicorn AI services: web development, mobile apps, blockchain, AI, Unreal Engine 5 games, and IT consultancy.",
  path: "/service",
});

const page = () => {
  return (
    <PageLayout>
      <CmnBanner title="IT Services" />
      <ServiceItems />
    </PageLayout>
  );
};

export default page;
