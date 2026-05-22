"use client";

import Image from "next/image";
import LocalizedLink from "@/components/layout/LocalizedLink";
import type { PortfolioCase } from "@/data/portfolioCases";

type CaseCardProps = {
  project: PortfolioCase;
};

const CaseCard = ({ project }: CaseCardProps) => {
  const detailHref = `/case-details/${project.slug}`;

  return (
    <div className="case-two__item">
      <div className="image case-two__image">
        <Image src={project.image} alt={project.title} priority />
      </div>
      <div className="case-two__content">
        <span className="case-two__category">{project.category}</span>
        <h4>
          <LocalizedLink href={detailHref} className="text-white">
            {project.title}
          </LocalizedLink>
        </h4>
      </div>
      <LocalizedLink href={detailHref} className="case-two__btn">
        <i className="fa-regular fa-arrow-right"></i>
      </LocalizedLink>
    </div>
  );
};

export default CaseCard;
