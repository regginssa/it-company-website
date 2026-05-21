"use client";

import Image from "next/image";
import LocalizedLink from "@/components/layout/LocalizedLink";
import type { ServiceItem } from "@/lib/i18n/types";
import { useI18n } from "@/contexts/I18nProvider";
import itemShape from "@/public/images/shape/service-two-item-shape.png";

type ServiceCardProps = {
  service: ServiceItem;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { dict } = useI18n();
  const detailHref = `/service-details/${service.slug}`;

  return (
    <div className="service-two__item">
      <div className="image">
        <Image src={service.image} alt={service.title} priority />
      </div>
      <div className="service-two__content">
        <div className="icon">
          <Image src={service.icon} alt="" priority />
        </div>
        <div className="shape">
          <Image src={itemShape} alt="" priority />
        </div>
        <h4>
          <LocalizedLink href={detailHref} className="primary-hover">
            {service.title}
          </LocalizedLink>
        </h4>
        <p>{service.summary}</p>
        <LocalizedLink className="read-more-btn" href={detailHref}>
          {dict.common.readMore}{" "}
          <i className="fa-regular fa-arrow-right-long"></i>
        </LocalizedLink>
      </div>
    </div>
  );
};

export default ServiceCard;
