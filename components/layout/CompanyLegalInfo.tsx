"use client";

import { companyLegal } from "@/data/company";
import { useI18n } from "@/contexts/I18nProvider";

type CompanyLegalInfoProps = {
  variant?: "footer" | "contact";
};

const CompanyLegalInfo = ({ variant = "footer" }: CompanyLegalInfoProps) => {
  const { dict } = useI18n();
  const labels = dict.common.company;

  return (
    <div className={`company-legal company-legal--${variant}`}>
      {variant === "contact" && (
        <h4 className="company-legal__title text-white mb-20">
          {labels.detailsTitle}
        </h4>
      )}
      <p className="company-legal__name mb-0">{companyLegal.name}</p>
      <ul className="company-legal__ids list-unstyled mb-0">
        <li>
          <span className="company-legal__label" style={{ color: "white" }}>
            {labels.krs}
          </span>{" "}
          {companyLegal.krs}
        </li>
        <li>
          <span className="company-legal__label" style={{ color: "white" }}>
            {labels.nip}
          </span>{" "}
          {companyLegal.nip}
        </li>
        <li>
          <span className="company-legal__label" style={{ color: "white" }}>
            {labels.regon}
          </span>{" "}
          {companyLegal.regon}
        </li>
      </ul>
    </div>
  );
};

export default CompanyLegalInfo;
