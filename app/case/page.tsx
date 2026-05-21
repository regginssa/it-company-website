import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CaseItems from "@/components/containers/case/CaseItems";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Case studies from Charlie Unicorn AI: NFT marketplace, EventWorld, Unicorn Racing Game (UE5), and BabyU AI.",
  path: "/case",
});

const page = () => {
  return (
    <PageLayout>
      <CmnBanner title="Our Portfolio" />
      <CaseItems />
    </PageLayout>
  );
};

export default page;
