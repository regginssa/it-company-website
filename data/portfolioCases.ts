import { StaticImageData } from "next/image";
import caseImage1 from "@/public/images/case/case-two-image1.jpg";
import caseImage2 from "@/public/images/case/case-two-image2.jpg";
import caseImage3 from "@/public/images/case/case-two-image3.jpg";
import caseImage4 from "@/public/images/case/case-two-image4.jpg";

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

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "nft-marketplace",
    title: "NFT Marketplace",
    category: "Blockchain",
    image: caseImage1,
    summary:
      "Live on BNB Chain, enabling users to trade and mint NFTs easily and securely.",
    description:
      "Charlie Unicorn AI built a full-featured NFT marketplace deployed on BNB Chain. Users can mint, list, buy, and sell digital assets through a streamlined experience designed for security and ease of use. The platform supports wallet connectivity and on-chain transactions so creators and collectors can participate in the NFT economy with confidence.",
    platforms: "BNB Chain",
    highlights: [
      "NFT minting and trading",
      "BNB Chain integration",
      "Secure wallet connectivity",
      "User-friendly marketplace UX",
    ],
  },
  {
    slug: "eventworld",
    title: "EventWorld",
    category: "Web & Mobile",
    image: caseImage2,
    summary:
      "A fully functional app bridging real-world events with blockchain innovation—web, Android, and iOS.",
    description:
      "EventWorld connects live events with Web3 and AI. The platform includes Web3 payments, AI-powered event discovery, digital ticketing, and one-click booking for airport, hotel, and transfer services based on the event location users select. One click handles the full journey—from discovery to travel arrangements.",
    platforms: "Web, Android, iOS",
    highlights: [
      "Web3 payments",
      "AI event discovery and ticketing",
      "One-click airport, hotel & transfer booking",
      "Cross-platform web and mobile apps",
    ],
  },
  {
    slug: "unicorn-racing-game",
    title: "Unicorn Racing Game",
    category: "UE5 Game",
    image: caseImage3,
    summary:
      "PC and mobile game built with Unreal Engine 5—grow, race, and bet on blockchain.",
    description:
      "An Unreal Engine 5 racing experience where players raise a unicorn from baby to legendary form, compete in races, and participate in blockchain-based betting. The game features rich 3D characters and items plus diverse environments including land, space, city, and more across dash stages 1 through 5.",
    platforms: "PC, Mobile (UE5)",
    highlights: [
      "Unreal Engine 5 development",
      "Unicorn growth and racing gameplay",
      "Blockchain betting integration",
      "Multiple 3D environments and dash stages",
    ],
  },
  {
    slug: "babyu-ai",
    title: "BabyU AI",
    category: "AI Platform",
    image: caseImage4,
    summary:
      "AI agent and kids learning platform on web and mobile—guided by a cute baby unicorn.",
    description:
      "BabyU combines custom AI modeling with an engaging teaching platform for children. Parents can guide learning based on their child's interests and growth path. A friendly baby unicorn AI answers questions for kids and parents, supported by 3D characters and items. Children choose their favorite baby unicorn and customize it with items as they learn and grow.",
    platforms: "Web, Android, iOS",
    highlights: [
      "Custom AI tutoring for kids",
      "Parent-controlled learning paths",
      "Interactive 3D baby unicorn characters",
      "Personalization with items and avatars",
    ],
  },
];

export function getPortfolioCase(slug: string): PortfolioCase | undefined {
  return portfolioCases.find((c) => c.slug === slug);
}
