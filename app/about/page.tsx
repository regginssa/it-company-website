import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import About from "@/components/containers/Home/About";
import ChooseArea from "@/components/containers/Home/ChooseArea";
import Brand from "@/components/containers/Home/Brand";
import Case from "@/components/containers/Home/Case";
import Testimonial from "@/components/containers/Home/Testimonial";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Charlie Unicorn AI — a software studio for web, mobile, blockchain, AI, and Unreal Engine 5 development based in Manowo, Poland.",
  path: "/about",
});

const page = () => {
  return (
    <PageLayout>
      <CmnBanner title="About Us" />
      <About />
      <ChooseArea />
      <Brand />
      <Case />
      <Testimonial />
    </PageLayout>
  );
};

export default page;
