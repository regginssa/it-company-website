import Image from "next/image";
import type { PortfolioCase } from "@/data/portfolioCases";
import Two from "@/public/images/case/case-details-image2.jpg";
import Three from "@/public/images/case/case-details-image3.jpg";

type CaseSingleProps = {
  project: PortfolioCase;
};

const CaseSingle = ({ project }: CaseSingleProps) => {
  return (
    <section className="case-single-area pt-120 pb-120">
      <div className="container">
        <div className="case-single__item">
          <div className="image">
            <Image src={project.image} alt={project.title} priority />
          </div>
          <h3 className="case-single__title mt-40 mb-30">{project.title}</h3>
          <p>{project.description}</p>
          <ul className="case-date py-4 bor-top bor-bottom mt-40">
            <li>
              <span>Category:</span> {project.category}
            </li>
            <li>
              <span>Platforms:</span> {project.platforms}
            </li>
            <li>
              <span>Built by:</span> Charlie Unicorn AI
            </li>
          </ul>
          <h3 className="case-single__title mt-40 mb-30">Key Features</h3>
          <div className="case-challenge-list mt-30">
            <ul className="case-challenge">
              {project.highlights.slice(0, 2).map((item) => (
                <li key={item} className="mb-3">
                  <i className="fa-solid fa-check"></i>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="case-challenge">
              {project.highlights.slice(2, 4).map((item) => (
                <li key={item} className="mb-3">
                  <i className="fa-solid fa-check"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="case-single__title mt-40 mb-30">Project Overview</h3>
          <p>{project.summary}</p>
        </div>
        <div className="row g-4 mt-10">
          <div className="col-md-6">
            <div className="image">
              <Image src={Two} alt="Project detail" priority />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <Image src={Three} alt="Project detail" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSingle;
