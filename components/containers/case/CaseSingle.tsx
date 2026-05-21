"use client";

import Image from "next/image";
import type { PortfolioCase } from "@/data/portfolioCases";
import { useI18n } from "@/contexts/I18nProvider";

type CaseSingleProps = {
  project: PortfolioCase;
};

const CaseSingle = ({ project }: CaseSingleProps) => {
  const { dict } = useI18n();
  const labels = dict.portfolio.single;

  return (
    <section className="case-single-area pt-120 pb-120">
      <div className="container">
        <div className="case-single__item">
          <div className="image">
            <Image src={project.image} alt={project.title} priority />
          </div>
          <h2 className="case-single__title mt-40 mb-30">{project.title}</h2>
          <p>{project.description}</p>
          <ul className="case-date py-4 bor-top bor-bottom mt-40">
            <li>
              <span>{labels.category}</span> {project.category}
            </li>
            <li>
              <span>{labels.platforms}</span> {project.platforms}
            </li>
            <li>
              <span>{labels.builtBy}</span> {dict.common.builtBy}
            </li>
          </ul>
          <h2 className="case-single__title mt-40 mb-30">
            {labels.keyFeatures}
          </h2>
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
          <h2 className="case-single__title mt-40 mb-30">
            {labels.projectOverview}
          </h2>
          <p>{project.summary}</p>
        </div>
      </div>
    </section>
  );
};

export default CaseSingle;
