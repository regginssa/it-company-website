"use client";
import { useState } from "react";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Five from "@/public/images/icon/service-icon2.png";
import Six from "@/public/images/icon/service-icon3.png";
import { useI18n } from "@/contexts/I18nProvider";
import { getLocalizedServices } from "@/lib/i18n/localized-data";
import LocalizedLink from "@/components/layout/LocalizedLink";

const alterIcons = [Four, Five, Six];

const ServiceAlter = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(1);
  const { locale } = useI18n();
  const alterServices = getLocalizedServices(locale).slice(0, 3);

  return (
    <section className="service-area pt-120 pb-120" id="service-section">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="row g-4">
          {alterServices.map((service, index) => (
            <div
              key={service.slug}
              className="col-lg-4 col-md-6 "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
            >
              <div
                className={
                  "service__item " +
                  (isOverviewOpen === index ? " active" : " ")
                }
                onMouseEnter={() => setOverviewOpen(index)}
              >
                <div className="service-shape">
                  <Image src={Three} alt="shape" priority />
                </div>
                <div className="service__icon">
                  <Image src={alterIcons[index]} alt="icon" priority />
                </div>
                <h4>
                  <LocalizedLink href={`/service-details/${service.slug}`}>
                    {service.title}
                  </LocalizedLink>
                </h4>
                <p>{service.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAlter;
