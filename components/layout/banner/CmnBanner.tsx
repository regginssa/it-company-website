import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/banner/inner-banner-shape2.png";
import Two from "@/public/images/banner/inner-banner-shape1.png";
import Three from "@/public/images/banner/inner-banner-shape3.png";

type CmnBannerProps = {
  title: string;
};

const CmnBanner = ({ title }: CmnBannerProps) => {
  return (
    <section
      className="banner__inner-page bg-image pt-180 pb-180 bg-image"
      aria-labelledby="page-title"
      style={{
        backgroundImage: "url(/images/banner/banner-inner-page.jpg)",
      }}
    >
      <div
        className="shape2 "
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
        aria-hidden="true"
      >
        <Image src={One} alt="" priority />
      </div>
      <div
        className="shape1 "
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
        aria-hidden="true"
      >
        <Image src={Two} alt="" priority />
      </div>
      <div
        className="shape3 "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
        aria-hidden="true"
      >
        <Image className="sway__animationX" src={Three} alt="" priority />
      </div>
      <div className="container">
        <h1
          id="page-title"
          className=""
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1500"
        >
          {title}
        </h1>
        <nav
          className="breadcrumb-list "
          aria-label="Breadcrumb"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <ol className="list-unstyled d-flex flex-wrap align-items-center mb-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">
              <span>
                <i
                  className="fa-regular fa-angles-right mx-2"
                  aria-hidden="true"
                ></i>
                {title}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default CmnBanner;
