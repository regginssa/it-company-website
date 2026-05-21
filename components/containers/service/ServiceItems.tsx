import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/shape/service-two-item-shape.png";
import Two from "@/public/images/service/service-image1.webp";
import Three from "@/public/images/service/service-image2.webp";
import Four from "@/public/images/service/service-image3.webp";
import Five from "@/public/images/service/service-image4.webp";
import Six from "@/public/images/service/service-image5.webp";
import Seven from "@/public/images/service/service-image6.webp";
import Eight from "@/public/images/icon/service-two-icon1.png";
import Nine from "@/public/images/icon/service-two-icon2.png";
import Ten from "@/public/images/icon/service-two-icon3.png";
import Eleven from "@/public/images/icon/service-two-icon4.png";
import Twelve from "@/public/images/icon/service-two-icon5.png";
import Thirteen from "@/public/images/icon/service-two-icon6.png";

const ServiceItems = () => {
  return (
    <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eight} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Web Development
                  </Link>
                </h4>
                <p>
                  Fast, responsive websites and web apps built with modern
                  frameworks, secure APIs, and SEO-ready architecture for your
                  business.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Nine} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Mobile App Development
                  </Link>
                </h4>
                <p>
                  Native and cross-platform iOS and Android applications
                  engineered for performance, usability, and scalable growth.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Ten} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Blockchain Development
                  </Link>
                </h4>
                <p>
                  Smart contracts, dApps, wallets, and blockchain integrations
                  delivered with security-first design and auditable code.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eleven} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Unreal Engine 5 Game Development
                  </Link>
                </h4>
                <p>
                  Immersive games and interactive experiences with UE5—high
                  fidelity visuals, multiplayer systems, and cross-platform
                  launch support.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Twelve} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    AI Development
                  </Link>
                </h4>
                <p>
                  Custom AI models, LLM integrations, and intelligent
                  automation that enhance products with machine learning and
                  generative AI.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Seven} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Thirteen} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    IT Consultancy
                  </Link>
                </h4>
                <p>
                  Technology strategy, architecture guidance, and product
                  roadmaps to help you ship faster with the right stack.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
