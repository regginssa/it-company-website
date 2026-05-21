import Image from "next/image";
import Link from "next/link";
import type { PortfolioCase } from "@/data/portfolioCases";

type CaseCardProps = {
  project: PortfolioCase;
};

const CaseCard = ({ project }: CaseCardProps) => {
  return (
    <div className="case-two__item">
      <div className="image case-two__image">
        <Image src={project.image} alt={project.title} priority />
      </div>
      <div className="case-two__content">
        <span>{project.category}</span>
        <h4>
          <Link
            href={`/case-details/${project.slug}`}
            className="text-white"
          >
            {project.title}
          </Link>
        </h4>
      </div>
      <Link href={`/case-details/${project.slug}`} className="case-two__btn">
        <i className="fa-regular fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default CaseCard;
