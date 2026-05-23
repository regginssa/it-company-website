"use client";

import Image from "next/image";
import One from "@/public/images/shape/footer-regular-left.png";
import Two from "@/public/images/shape/footer-solid-left.png";
import Three from "@/public/images/shape/footer-regular-right.png";
import Four from "@/public/images/shape/footer-solid-right.png";
import Five from "@/public/images/shape/footer-shadow-shape.png";
import Logo from "@/public/images/logo/logo.png";
import LocalizedLink from "@/components/layout/LocalizedLink";
import { useI18n } from "@/contexts/I18nProvider";

const Footer = () => {
  const { dict } = useI18n();
  const { common } = dict;

  return (
    <footer className="footer-two-area secondary-bg">
      <div
        className="footer__shape-regular-left "
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image src={One} alt="" priority />
      </div>
      <div
        className="footer__shape-solid-left "
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Two} alt="" priority />
      </div>
      <div
        className="footer__shape-solid-right "
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Three} alt="" priority />
      </div>
      <div
        className="footer__shape-regular-right "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image src={Four} alt="" priority />
      </div>
      <div className="footer__shadow-shape">
        <Image src={Five} alt="" priority />
      </div>
      <div className="container">
        <div className="footer__wrp pt-100 pb-100">
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <LocalizedLink
              href="/"
              className="logo mb-30"
              aria-label={`${common.siteName} home`}
            >
              <Image src={Logo} alt={`${common.siteName} logo`} priority />
            </LocalizedLink>
            <p>{common.footer.about}</p>
            <div className="social-icon">
              <LocalizedLink
                href="https://www.facebook.com/share/1XnvD4ETX8/?mibextid=wwXIfr"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </LocalizedLink>
              {/* <LocalizedLink href="/">
                <i className="fa-brands fa-twitter"></i>
              </LocalizedLink>
              <LocalizedLink href="/">
                <i className="fa-brands fa-linkedin-in"></i>
              </LocalizedLink>
              <LocalizedLink href="/">
                <i className="fa-brands fa-youtube"></i>
              </LocalizedLink> */}
            </div>
          </div>
          <div
            className="footer__item item-sm "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">{common.footer.quickLink}</h3>
            <ul>
              <li>
                <LocalizedLink href="/about">
                  <i className="fa-regular fa-angles-right me-1"></i>{" "}
                  {common.footer.aboutUs}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/service">
                  <i className="fa-regular fa-angles-right me-1"></i>{" "}
                  {common.footer.ourServices}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/case">
                  <i className="fa-regular fa-angles-right me-1"></i>{" "}
                  {common.footer.ourPortfolio}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/contact">
                  <i className="fa-regular fa-angles-right me-1"></i>{" "}
                  {common.footer.contact}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/faq">
                  <i className="fa-regular fa-angles-right me-1"></i>{" "}
                  {common.footer.faq}
                </LocalizedLink>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">{common.footer.contactUs}</h3>
            <address className="mb-20" style={{ color: "white" }}>
              {common.footer.addressLine1}
              <br />
              {common.footer.addressLine2}
            </address>
            <ul className="footer-contact">
              <li>
                <i className="fa-regular fa-clock" aria-hidden="true"></i>
                <div className="info">
                  <p className="fw-600 mb-1">{common.footer.openingHours}</p>
                  <p>{common.footer.hours}</p>
                </div>
              </li>
              <li>
                <i className="fa-duotone fa-phone" aria-hidden="true"></i>
                <div className="info">
                  <p className="fw-600 mb-1">{common.footer.phoneLabel}</p>
                  <p>
                    <a href="tel:+48504412991">{common.phone}</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
            <p data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500">
              &copy; {new Date().getFullYear()} {common.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
