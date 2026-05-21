import { StaticImageData } from "next/image";
import caseImage1 from "@/public/images/case/case-two-image1.jpg";
import caseImage2 from "@/public/images/case/case-two-image2.jpg";
import caseImage3 from "@/public/images/case/case-two-image3.jpg";
import caseImage4 from "@/public/images/case/case-two-image4.jpg";

export type PortfolioAsset = {
  slug: string;
  image: StaticImageData;
};

export const portfolioAssets: PortfolioAsset[] = [
  { slug: "nft-marketplace", image: caseImage1 },
  { slug: "charlieparty", image: caseImage2 },
  { slug: "unicorn-racing-game", image: caseImage3 },
  { slug: "babyu-ai", image: caseImage4 },
];

export const portfolioSlugs = portfolioAssets.map((p) => p.slug);
