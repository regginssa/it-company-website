import { StaticImageData } from "next/image";
import image1 from "@/public/images/testimonial/testimonial-two-image1.png";
import image2 from "@/public/images/testimonial/testimonial-two-image2.png";
import image3 from "@/public/images/testimonial/testimonial-two-image3.png";
import image4 from "@/public/images/testimonial/testimonial-two-image4.png";
import image5 from "@/public/images/testimonial/testimonial-two-image5.png";

const testimonialImages = [image1, image2, image3, image4, image5];

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  image: StaticImageData;
};

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Charlie Unicorn AI delivered a polished, fast web platform for our product launch. Communication was clear, deadlines were met, and the codebase was clean and easy to extend.",
    name: "Sarah Mitchell",
    role: "Founder, SaaS Startup",
    image: testimonialImages[2],
  },
  {
    quote:
      "Our iOS and Android apps shipped on schedule with a smooth UX. The team handled API integration, push notifications, and store submission without us chasing details.",
    name: "James Okonkwo",
    role: "Product Manager, Mobile App",
    image: testimonialImages[0],
  },
  {
    quote:
      "They built our NFT marketplace on BNB Chain with secure minting and trading flows. Wallet integration and smart contract work were solid from day one.",
    name: "Elena Vasquez",
    role: "Blockchain Project Lead",
    image: testimonialImages[1],
  },
  {
    quote:
      "The AI learning features and parent dashboard exceeded our expectations. Custom modeling, friendly UX, and 3D characters came together as one cohesive product.",
    name: "David Chen",
    role: "EdTech Product Owner",
    image: testimonialImages[3],
  },
  {
    quote:
      "Unreal Engine 5 quality shows in every environment—from character design to racing mechanics and blockchain betting. A ambitious game, delivered with real craft.",
    name: "Marcus Reid",
    role: "Game Studio Director",
    image: testimonialImages[4],
  },
];
