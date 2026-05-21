import { StaticImageData } from "next/image";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  descriptionExtra: string;
  image: StaticImageData;
  icon: StaticImageData;
  detailSecondaryImage: StaticImageData;
  benefits: string[];
  faqs: ServiceFaq[];
};
