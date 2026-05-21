import CaseCard from "@/components/containers/case/CaseCard";
import { portfolioCases } from "@/data/portfolioCases";

const CaseItems = () => {
  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          {portfolioCases.map((project) => (
            <div
              key={project.slug}
              className="col-xl-6 col-lg-6 col-md-6"
            >
              <CaseCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseItems;
