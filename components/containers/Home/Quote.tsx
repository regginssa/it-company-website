"use client";

import Image from "next/image";
import LocalizedLink from "@/components/layout/LocalizedLink";
import { useI18n } from "@/contexts/I18nProvider";
import One from "@/public/images/shape/quote-shape.png";
import Two from "@/public/images/shape/quote-shape2.png";

const Quote = () => {
  const { dict } = useI18n();
  const quote = dict.home.quote;

  return (
    <section className="quote-area">
      <div className="container">
        <div className="quote__wrp gradient-bg">
          <div
            className="counter__shape "
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <Image src={One} alt="shape" priority />
          </div>
          <div className="quote__shape bobble__animation">
            <Image src={Two} alt="shape" priority />
          </div>
          <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
            <div className="section-header">
              <h5
                data-aos="fade-left"
                className=" text-white"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <svg
                  className="me-1"
                  width="28"
                  height="12"
                  viewBox="0 0 28 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.75"
                    y="0.75"
                    width="18.5"
                    height="10.5"
                    rx="5.25"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="8.75"
                    y="0.75"
                    width="18.5"
                    height="10.5"
                    rx="5.25"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
                {quote.eyebrow}
              </h5>
              <h2
                data-aos="fade-left"
                className=" text-white"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                {quote.titleLine1} <br /> {quote.titleLine2}
              </h2>
            </div>
            <LocalizedLink
              href="/contact"
              className="btn-one "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              {quote.cta} <i className="fa-regular fa-arrow-right-long"></i>
            </LocalizedLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
