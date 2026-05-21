import { common } from "./common";
import { home } from "./home";
import { servicesContent } from "./services";
import { portfolioContent } from "./portfolio";
import { testimonialsContent } from "./testimonials";
import { contact } from "./contact";

export const pl = {
  common,
  home,
  services: servicesContent,
  portfolio: portfolioContent,
  testimonials: testimonialsContent,
  contact,
} as const;
