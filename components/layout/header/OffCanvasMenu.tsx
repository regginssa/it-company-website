"use client";

import Image from "next/image";
import svgLogo from "@/public/images/logo/logo.png";
import LocalizedLink from "@/components/layout/LocalizedLink";
import { useI18n } from "@/contexts/I18nProvider";

type OffCanvasMenuProps = {
  toggleMenu: boolean;
  handleToggleMenu: (open: boolean) => void;
};

const OffCanvasMenu = ({ toggleMenu, handleToggleMenu }: OffCanvasMenuProps) => {
  const { dict } = useI18n();
  const { common } = dict;

  return (
    <aside
      id="targetElement"
      className={(toggleMenu ? " " : " sidebar__hide") + " sidebar-area"}
      aria-label="Mobile navigation"
    >
      <div className="sidebar__overlay"></div>
      <LocalizedLink
        href="/"
        className="logo mb-40"
        aria-label={`${common.siteName} home`}
      >
        <Image src={svgLogo} alt={`${common.siteName} logo`} priority />
      </LocalizedLink>
      <div className="sidebar__search mb-30">
        <input type="text" placeholder={common.search} />
        <i className="fa-regular fa-magnifying-glass"></i>
      </div>
      <div className="mobile-menu overflow-hidden">
        <nav className="mean-nav">
          <ul>
            <li>
              <LocalizedLink href="/">{common.nav.home}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink href="/about">{common.nav.about}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink href="/service">{common.nav.services}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink href="/case">{common.nav.caseStudy}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink href="/faq">{common.nav.faq}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink href="/contact">{common.nav.contact}</LocalizedLink>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="info pt-40">
        <li>
          <i className="fa-solid primary-color fa-paper-plane"></i>{" "}
          <a href={`mailto:${common.email}`}>{common.email}</a>
        </li>
        <li className="py-2">
          <i className="fa-solid primary-color fa-phone-volume"></i>{" "}
          <a href="tel:+48504412991">{common.phone}</a>
        </li>
      </ul>
      <div className="social-icon mt-20">
        <LocalizedLink href="/">
          <i className="fa-brands fa-facebook-f"></i>
        </LocalizedLink>
        <LocalizedLink href="/">
          <i className="fa-brands fa-twitter"></i>
        </LocalizedLink>
        <LocalizedLink href="/">
          <i className="fa-brands fa-linkedin-in"></i>
        </LocalizedLink>
        <LocalizedLink href="/">
          <i className="fa-brands fa-youtube"></i>
        </LocalizedLink>
      </div>
      <button
        id="closeButton"
        className="text-white"
        type="button"
        onClick={() => handleToggleMenu(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </aside>
  );
};

export default OffCanvasMenu;
