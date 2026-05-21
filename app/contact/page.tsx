import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactContent from "@/components/containers/contact/ContactContent";
import ContactMap from "@/components/containers/contact/ContactMap";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Charlie Unicorn AI to discuss your project or book a consultancy. Email team@charlieunicornai.eu or call +48 504 412 991.",
  path: "/contact",
});

const page = () => {
  return (
    <PageLayout>
      <CmnBanner title="Contact Us" />
      <ContactContent />
      <ContactMap />
    </PageLayout>
  );
};

export default page;
