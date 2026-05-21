"use client";

import ServiceCard from "@/components/containers/service/ServiceCard";
import { useI18n } from "@/contexts/I18nProvider";
import { getLocalizedServices } from "@/lib/i18n/localized-data";

const ServiceItems = () => {
  const { locale } = useI18n();
  const services = getLocalizedServices(locale);

  return (
    <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.slug} className="col-lg-4 col-md-6">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
