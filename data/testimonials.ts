import { StaticImageData } from "next/image";
import image1 from "@/public/images/testimonial/testimonial-two-image1.png";
import image2 from "@/public/images/testimonial/testimonial-two-image2.png";
import image3 from "@/public/images/testimonial/testimonial-two-image3.png";
import image4 from "@/public/images/testimonial/testimonial-two-image4.png";
import image5 from "@/public/images/testimonial/testimonial-two-image5.png";

export const testimonialImages = [image1, image2, image3, image4, image5];

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  image: StaticImageData;
};
