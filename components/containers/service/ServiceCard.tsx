import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/data/services";
import itemShape from "@/public/images/shape/service-two-item-shape.png";

type ServiceCardProps = {
  service: ServiceItem;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const detailHref = `/service-details/${service.slug}`;

  return (
    <div className="service-two__item">
      <div className="image">
        <Image src={service.image} alt={service.title} priority />
      </div>
      <div className="service-two__content">
        <div className="icon">
          <Image src={service.icon} alt="icon" priority />
        </div>
        <div className="shape">
          <Image src={itemShape} alt="shape" priority />
        </div>
        <h4>
          <Link href={detailHref} className="primary-hover">
            {service.title}
          </Link>
        </h4>
        <p>{service.summary}</p>
        <Link className="read-more-btn" href={detailHref}>
          Read More <i className="fa-regular fa-arrow-right-long"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
