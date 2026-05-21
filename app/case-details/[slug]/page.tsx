import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CaseSingle from "@/components/containers/case/CaseSingle";
import { getPortfolioCase, portfolioCases } from "@/data/portfolioCases";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return portfolioCases.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getPortfolioCase(params.slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/case-details/${project.slug}`,
  });
}

const page = ({ params }: PageProps) => {
  const project = getPortfolioCase(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <CmnBanner title={project.title} />
      <CaseSingle project={project} />
    </PageLayout>
  );
};

export default page;
