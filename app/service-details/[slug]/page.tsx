import { notFound } from "next/navigation";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceSingle from "@/components/containers/service/ServiceSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import { getService, services } from "@/data/services";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const page = ({ params }: PageProps) => {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Header />
      <CmnBanner title={service.title} />
      <ServiceSingle service={service} />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
