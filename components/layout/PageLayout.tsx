import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default PageLayout;
