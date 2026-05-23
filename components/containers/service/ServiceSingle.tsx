"use client";
import { useState } from "react";
import Image from "next/image";
import type { ServiceItem } from "@/lib/i18n/types";
import LocalizedLink from "@/components/layout/LocalizedLink";
import { useI18n } from "@/contexts/I18nProvider";
import { getLocalizedServices } from "@/lib/i18n/localized-data";

type ServiceSingleProps = {
  service: ServiceItem;
};

const ServiceSingle = ({ service }: ServiceSingleProps) => {
  const [openFaq, setOpenFaq] = useState(0);
  const { locale, dict } = useI18n();
  const labels = dict.services.single;
  const allServices = getLocalizedServices(locale);

  return (
    <section className="service-single-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="service-single__left-item">
              <div className="image mb-50">
                <Image src={service.image} alt={service.title} priority />
              </div>
              <h2 className="title mb-30">{service.title}</h2>
              <p className="mb-20">{service.description}</p>
              <p>{service.descriptionExtra}</p>
              <div className="row g-5 mt-40 mb-40 align-items-center">
                <div className="col-lg-5">
                  <h4 className="mb-20">{labels.whatYouGet}</h4>
                  <ul>
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="mb-15">
                        <i className="fa-solid fa-check"></i> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="col-lg-7">
                  <div className="image">
                    <Image
                      src={service.detailSecondaryImage}
                      alt={service.title}
                      priority
                    />
                  </div>
                </div> */}
              </div>
              <h3 className="title mb-30">{labels.commonQuestions}</h3>
              <p className="mb-30">
                {labels.learnMore.replace(
                  "{service}",
                  service.title.toLowerCase()
                )}{" "}
                <LocalizedLink href="/contact">
                  {dict.common.contactUsLink}
                </LocalizedLink>{" "}
                {labels.bookConsultancy}
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
                    <h3 className="accordion-header" id={`heading-${index}`}>
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
                    </h3>
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
                <h4 className="mb-20">{labels.allServices}</h4>
                <ul className="category service-category">
                  {allServices.map((item) => (
                    <li
                      key={item.slug}
                      className={item.slug === service.slug ? "active" : ""}
                    >
                      <LocalizedLink href={`/service-details/${item.slug}`}>
                        {item.title}
                      </LocalizedLink>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item sub-bg mb-30">
                <h4 className="mb-20">{labels.bookConsultancyTitle}</h4>
                <p className="mb-20">
                  {labels.sidebarText.replace(
                    "{service}",
                    service.title.toLowerCase()
                  )}
                </p>
                <LocalizedLink href="/contact" className="btn-one">
                  {labels.contactUs}{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSingle;
