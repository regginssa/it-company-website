import { StaticImageData } from "next/image";
import serviceImage1 from "@/public/images/service/service-image1.png";
import serviceImage2 from "@/public/images/service/service-image2.png";
import serviceImage3 from "@/public/images/service/service-image3.png";
import serviceImage4 from "@/public/images/service/service-image4.png";
import serviceImage5 from "@/public/images/service/service-image5.png";
import serviceImage6 from "@/public/images/service/service-image6.png";
import serviceIcon1 from "@/public/images/icon/service-two-icon1.png";
import serviceIcon2 from "@/public/images/icon/service-two-icon2.png";
import serviceIcon3 from "@/public/images/icon/service-two-icon3.png";
import serviceIcon4 from "@/public/images/icon/service-two-icon4.png";
import serviceIcon5 from "@/public/images/icon/service-two-icon5.png";
import serviceIcon6 from "@/public/images/icon/service-two-icon6.png";
import detailImage2 from "@/public/images/service/service-single-image2.jpg";

export type ServiceAsset = {
  slug: string;
  image: StaticImageData;
  icon: StaticImageData;
  detailSecondaryImage: StaticImageData;
};

export const serviceAssets: ServiceAsset[] = [
  {
    slug: "web-development",
    image: serviceImage1,
    icon: serviceIcon1,
    detailSecondaryImage: detailImage2,
  },
  {
    slug: "mobile-app-development",
    image: serviceImage2,
    icon: serviceIcon2,
    detailSecondaryImage: detailImage2,
  },
  {
    slug: "blockchain-development",
    image: serviceImage3,
    icon: serviceIcon3,
    detailSecondaryImage: detailImage2,
  },
  {
    slug: "unreal-engine-5-game-development",
    image: serviceImage4,
    icon: serviceIcon4,
    detailSecondaryImage: detailImage2,
  },
  {
    slug: "ai-development",
    image: serviceImage5,
    icon: serviceIcon5,
    detailSecondaryImage: detailImage2,
  },
  {
    slug: "it-consultancy",
    image: serviceImage6,
    icon: serviceIcon6,
    detailSecondaryImage: detailImage2,
  },
];

export const serviceSlugs = serviceAssets.map((s) => s.slug);
