import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceAlter from "@/components/containers/service/ServiceAlter";
import About from "@/components/containers/Home/About";
import ChooseArea from "@/components/containers/Home/ChooseArea";
import Team from "@/components/containers/Home/Team";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <Header />
      <CmnBanner title="IT Solutions" />
      <ServiceAlter />
      <About />
      <ChooseArea />
      {/* <Team /> */}
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
