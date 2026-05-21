import ServiceCard from "@/components/containers/service/ServiceCard";
import { services } from "@/data/services";

const ServiceItems = () => {
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
