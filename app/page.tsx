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
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software Development & IT Solutions",
  description:
    "Charlie Unicorn AI — Web development, mobile apps, blockchain, AI, and Unreal Engine 5 game development. Contact us to discuss your project or book a consultancy.",
  path: "",
});

const page = () => {
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
