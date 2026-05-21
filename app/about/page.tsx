import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import About from "@/components/containers/Home/About";
import ChooseArea from "@/components/containers/Home/ChooseArea";
import Brand from "@/components/containers/Home/Brand";
import Case from "@/components/containers/Home/Case";
import Testimonial from "@/components/containers/Home/Testimonial";
import Team from "@/components/containers/Home/Team";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="About Us" />
      <About />
      <ChooseArea />
      <Brand />
      <Case />
      <Testimonial />
      {/* <Team /> */}
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
