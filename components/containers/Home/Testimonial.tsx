"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { testimonials } from "@/data/testimonials";

const QuoteIcon = () => (
  <svg
    className="coma"
    width="50"
    height="37"
    viewBox="0 0 50 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
      fill="#3C72FC"
    />
  </svg>
);

const StarRating = () => (
  <div className="star mb-10">
    <i className="fa-sharp fa-solid fa-star"></i>
    <i className="fa-sharp fa-solid fa-star"></i>
    <i className="fa-sharp fa-solid fa-star"></i>
    <i className="fa-sharp fa-solid fa-star"></i>
    <i className="fa-sharp fa-solid fa-star"></i>
  </div>
);

const Testimonial = () => {
  return (
    <section className="testimonial-two-area pb-120">
      <div className="container">
        <div className="section-header text-center mb-40">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <svg
              className="me-1"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.75"
                y="0.75"
                width="18.5"
                height="10.5"
                rx="5.25"
                stroke="#3C72FC"
                strokeWidth="1.5"
              />
              <mask id="path-2-inside-1_869_295" fill="white">
                <path d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
              </mask>
              <path
                d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                fill="#3C72FC"
                mask="url(#path-2-inside-1_869_295)"
              />
            </svg>
            Client Feedback
          </h5>
          <h2
            data-aos="fade-up"
            className=" text-white"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Trusted Across Web, Mobile, Blockchain, AI & Games
          </h2>
        </div>
        <div className="swiper testimonial-two__slider">
          <Swiper
            slidesPerView={1}
            freeMode={true}
            spaceBetween={24}
            speed={800}
            loop={true}
            roundLengths={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".testimonial__dot",
              clickable: true,
            }}
            breakpoints={{
              992: {
                slidesPerView: 2,
              },
            }}
            className="swiper-wrapper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div>
                  <div className="testimonial-two__item">
                    <StarRating />
                    <p className="mb-30">&ldquo; {item.quote} &rdquo;</p>
                    <div className="d-flex align-items-center gap-3">
                      <Image src={item.image} alt={item.name} priority />
                      <div className="con">
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                    </div>
                    <QuoteIcon />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center mt-40">
          <div className="dot testimonial__dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
