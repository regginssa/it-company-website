import { StaticImageData } from "next/image";

export type PortfolioCase = {
  slug: string;
  title: string;
  category: string;
  image: StaticImageData;
  summary: string;
  description: string;
  platforms: string;
  highlights: string[];
};

export { portfolioSlugs, portfolioAssets } from "./portfolioAssets";
