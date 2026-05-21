import { notFound } from "next/navigation";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CaseSingle from "@/components/containers/case/CaseSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import {
  getPortfolioCase,
  portfolioCases,
} from "@/data/portfolioCases";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return portfolioCases.map((project) => ({
    slug: project.slug,
  }));
}

const page = ({ params }: PageProps) => {
  const project = getPortfolioCase(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Header />
      <CmnBanner title={project.title} />
      <CaseSingle project={project} />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
