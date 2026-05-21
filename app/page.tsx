import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import Brand from "@/components/containers/Home/Brand";
import About from "@/components/containers/Home/About";
import Service from "@/components/containers/Home/Service";
import ChooseArea from "@/components/containers/Home/ChooseArea";
import Team from "@/components/containers/Home/Team";
import Faq from "@/components/containers/Home/Faq";
import Case from "@/components/containers/Home/Case";
import Testimonial from "@/components/containers/Home/Testimonial";
import Blog from "@/components/containers/Home/Blog";
import Quote from "@/components/containers/Home/Quote";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <Brand />
      <About />
      <Service />
      <ChooseArea />
      {/* <Team /> */}
      <Faq />
      <Case />
      <Testimonial />
      <Blog />
      <Quote />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
