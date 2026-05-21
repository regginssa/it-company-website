import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceSingle from "@/components/containers/service/ServiceSingle";
import { getService, services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/service-details/${service.slug}`,
  });
}

const page = ({ params }: PageProps) => {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <PageLayout>
      <CmnBanner title={service.title} />
      <ServiceSingle service={service} />
    </PageLayout>
  );
};

export default page;
