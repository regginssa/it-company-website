"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ServiceItem } from "@/data/services";
import { services } from "@/data/services";

type ServiceSingleProps = {
  service: ServiceItem;
};

const ServiceSingle = ({ service }: ServiceSingleProps) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="service-single-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="service-single__left-item">
              <div className="image mb-50">
                <Image src={service.image} alt={service.title} priority />
              </div>
              <h3 className="title mb-30">{service.title}</h3>
              <p className="mb-20">{service.description}</p>
              <p>{service.descriptionExtra}</p>
              <div className="row g-5 mt-40 mb-40 align-items-center">
                <div className="col-lg-5">
                  <h4 className="mb-20">What You Get</h4>
                  <ul>
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="mb-15">
                        <i className="fa-solid fa-check"></i> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-7">
                  <div className="image">
                    <Image
                      src={service.detailSecondaryImage}
                      alt={service.title}
                      priority
                    />
                  </div>
                </div>
              </div>
              <h3 className="title mb-30">Common Questions</h3>
              <p className="mb-30">
                Learn more about our {service.title.toLowerCase()} offering. Ready
                to discuss your project?{" "}
                <Link href="/contact">Contact Charlie Unicorn AI</Link> to book a
                consultancy—there is no online checkout or fixed pricing on this
                site.
              </p>
              <div className="accordion" id="accordionExample">
                {service.faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="accordion-item shadow border-none"
                    data-aos="fade-down"
                    data-aos-delay={index * 200}
                    data-aos-duration="1500"
                  >
                    <h2 className="accordion-header" id={`heading-${index}`}>
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${index}`}
                        aria-expanded={openFaq === index}
                        aria-controls={`collapse-${index}`}
                        className={
                          (openFaq === index ? " " : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() =>
                          setOpenFaq(openFaq === index ? -1 : index)
                        }
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse${
                        openFaq === index ? " show " : ""
                      }`}
                      aria-labelledby={`heading-${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="service-single__right-item">
              <div className="item sub-bg mb-30">
                <h4 className="mb-20">All Services</h4>
                <ul className="category service-category">
                  {services.map((item) => (
                    <li
                      key={item.slug}
                      className={item.slug === service.slug ? "active" : ""}
                    >
                      <Link href={`/service-details/${item.slug}`}>
                        {item.title}
                      </Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item sub-bg mb-30">
                <h4 className="mb-20">Book a Consultancy</h4>
                <p className="mb-20">
                  Tell us about your goals and we will recommend the right
                  approach for {service.title.toLowerCase()} or a combined
                  solution.
                </p>
                <Link href="/contact" className="btn-one">
                  Contact Us <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSingle;
