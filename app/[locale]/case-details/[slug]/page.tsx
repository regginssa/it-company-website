import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CaseSingle from "@/components/containers/case/CaseSingle";
import { portfolioSlugs } from "@/data/portfolioAssets";
import { isLocale } from "@/lib/i18n/config";
import { getLocalizedPortfolioCase } from "@/lib/i18n/localized-data";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return portfolioSlugs.flatMap((slug) =>
    ["en", "pl"].map((locale) => ({ locale, slug }))
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const project = getLocalizedPortfolioCase(locale, params.slug);
  if (!project) return {};
  return createPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/${locale}/case-details/${project.slug}`,
  });
}

const page = ({ params }: PageProps) => {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const project = getLocalizedPortfolioCase(locale, params.slug);

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
