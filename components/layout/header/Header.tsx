"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/logo/logo.png";
import OffCanvasMenu from "./OffCanvasMenu";
import LanguageSelector from "@/components/layout/LanguageSelector";
import LocalizedLink from "@/components/layout/LocalizedLink";
import { useI18n } from "@/contexts/I18nProvider";

const Header = () => {
  const { dict } = useI18n();
  const { common } = dict;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
    };

    window.addEventListener("resize", handleResizeHeader);
    return () => window.removeEventListener("resize", handleResizeHeader);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <header
        className={
          (scrolled ? " aniamted menu-fixed" : " ") +
          " header-area header-two-area"
        }
      >
        <div className="container header__container">
          <div className="header__main">
            <LocalizedLink
              href="/"
              className="logo"
              aria-label={`${common.siteName} home`}
            >
              <Image src={logo} alt={`${common.siteName} logo`} priority />
            </LocalizedLink>
            <div className="main-menu d-none d-lg-block">
              <nav aria-label="Primary navigation">
                <ul>
                  <li>
                    <LocalizedLink href="/">{common.nav.home}</LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink href="/about">
                      {common.nav.about}
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink href="/service">
                      {common.nav.services}
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink href="/case">
                      {common.nav.caseStudy}
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink href="/faq">{common.nav.faq}</LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink href="/contact">
                      {common.nav.contact}
                    </LocalizedLink>
                  </li>
                  {/* <li className="ml-20 d-none d-lg-block">
                    <button
                      type="button"
                      className="search-trigger border-0 bg-transparent p-0"
                      aria-label="Open search"
                      onClick={handleSearch}
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_307_344)">
                          <path
                            d="M16.0375 14.9381L12.0784 11.0334C13.0625 9.86621 13.6554 8.36744 13.6554 6.73438C13.6554 3.02103 10.5925 0 6.82774 0C3.0629 0 0 3.02103 0 6.73438C0 10.4475 3.0629 13.4683 6.82774 13.4683C8.4834 13.4683 10.0031 12.8836 11.1865 11.913L15.1456 15.8178C15.2687 15.9393 15.4301 16 15.5915 16C15.7529 16 15.9143 15.9393 16.0375 15.8178C16.2839 15.5748 16.2839 15.181 16.0375 14.9381ZM1.26142 6.73438C1.26142 3.70705 3.75845 1.24414 6.82774 1.24414C9.89695 1.24414 12.3939 3.70705 12.3939 6.73438C12.3939 9.76146 9.89695 12.2241 6.82774 12.2241C3.75845 12.2241 1.26142 9.76146 1.26142 6.73438Z"
                            fill="#ffffff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_307_344">
                            <rect width="16.2222" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="d-none d-xl-flex gap-4 align-items-center">
              <LanguageSelector />
              {/* <LocalizedLink href="/contact" className="btn-one">
                {common.getAQuote}{" "}
                <i className="fa-regular fa-arrow-right-long"></i>
              </LocalizedLink> */}
              <div className="about-three__left-item d-flex flex-wrap gap-2 align-items-center">
                <div className="about-call-icon">
                  <span>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_918_1337)">
                        <path
                          d="M5.41667 4.33337H9.75L11.9167 9.75004L9.20833 11.375C10.3685 13.7275 12.2725 15.6315 14.625 16.7917L16.25 14.0834L21.6667 16.25V20.5834C21.6667 21.158 21.4384 21.7091 21.0321 22.1154C20.6257 22.5218 20.0746 22.75 19.5 22.75C15.2742 22.4932 11.2885 20.6987 8.2949 17.7051C5.3013 14.7115 3.5068 10.7258 3.25 6.50004C3.25 5.9254 3.47827 5.3743 3.8846 4.96798C4.29093 4.56165 4.84203 4.33337 5.41667 4.33337Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 7.58337C16.8246 7.58337 17.3757 7.81165 17.7821 8.21798C18.1884 8.6243 18.4167 9.1754 18.4167 9.75004"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.25 3.25C17.9739 3.25 19.6272 3.93482 20.8462 5.15381C22.0652 6.37279 22.75 8.02609 22.75 9.75"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath>
                          <rect width="26" height="26" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="info">
                  <span className="sm-font fw-600 text-white">
                    {common.callUsNow}
                  </span>
                  <p className="text-white mb-0">
                    <a className="text-white" href="tel:+48504412991">
                      {common.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex d-xl-none align-items-center gap-3">
              <LanguageSelector />
              <div className="bars d-block d-lg-none">
                <i
                  id="openButton"
                  className="fa-solid fa-bars"
                  onClick={handleToggleMenu}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasMenu
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />

      <div
        className={(searchToggle ? " open" : " ") + " search-wrap"}
        onClick={closeSearch}
      >
        <div className="search-inner">
          <i
            className="fas fa-times search-close"
            id="search-close"
            onClick={closeSearch}
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder={common.search}
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
