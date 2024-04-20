import React, { useEffect, useState } from "react";
import "./Main.css";
import {
  RiCactusLine,
  RiCloseLine,
  RiUserLine,
  RiShoppingCartLine,
  RiMenuLine,
  RiArrowRightLine,
  RiShoppingBagLine,
  RiCheckboxFill,
  RiWhatsappFill,
  RiMessengerFill,
  RiMailFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiArrowUpLine,
  RiFacebookCircleFill,
} from "react-icons/ri";
import { Link } from 'react-router-dom';
// IMAGES

import homeCactus from "/IMAGES/home-cactus.png";
import newCactus1 from "/IMAGES/new-cactus-1.png";
import newCactus2 from "/IMAGES/new-cactus-2.png";
import newCactus3 from "/IMAGES/new-cactus-3.png";
import shopCactus1 from "/IMAGES/shop-cactus-1.png";
import shopCactus2 from "/IMAGES/shop-cactus-2.png";
import shopCactus3 from "/IMAGES/shop-cactus-3.png";
import shopCactus4 from "/IMAGES/shop-cactus-4.png";
import shopCactus5 from "/IMAGES/shop-cactus-5.png";
import careCactus from "/IMAGES/care-cactus.png";
import contactCactus from "/IMAGES/contact-cactus.png";

const Main = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
    const sections = ["home", "new", "shop", "care", "contact"];
    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (
        element &&
        element.offsetTop <= window.scrollY &&
        element.offsetTop + element.offsetHeight > window.scrollY
      ) {
        setActiveLink(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* ==================== HEADER ==================== */}

      <header
        className={`header ${scrollY >= 50 ? "blur-header" : ""}`}
        id="header"
      >
        <nav className="nav container">
          <a href="#" className="nav--logo">
            {" "}
            <RiCactusLine color="64CD8A" size="1.5rem" />
            Cactus{" "}
          </a>

          <div
            className={`nav--menu ${showMenu ? "show--menu" : ""}`}
            id="nav--menu"
          >
            <ul className="nav--list">
              <li className="nav--item">
                <a
                  href="#home"
                  className={`nav--link ${
                    activeLink === "home" ? "active-link" : ""
                  }`}
                  onClick={() => setActiveLink("home")}
                >
                  Home
                </a>
              </li>

              <li className="nav--item">
                <a
                  href="#new"
                  className={`nav--link ${
                    activeLink === "new" ? "active-link" : ""
                  }`}
                  onClick={() => setActiveLink("new")}
                >
                  News
                </a>
              </li>

              <li className="nav--item">
                <a
                  href="#shop"
                  className={`nav--link ${
                    activeLink === "shop" ? "active-link" : ""
                  }`}
                  onClick={() => setActiveLink("shop")}
                >
                  Shop
                </a>
              </li>

              <li className="nav--item">
                <a
                  href="#care"
                  className={`nav--link ${
                    activeLink === "care" ? "active-link" : ""
                  }`}
                  onClick={() => setActiveLink("care")}
                >
                  Care
                </a>
              </li>

              <li className="nav--item">
                <a
                  href="#contact"
                  className={`nav--link ${
                    activeLink === "contact" ? "active-link" : ""
                  }`}
                  onClick={() => setActiveLink("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Close button */}

            <div className="nav--close" id="nav--close" onClick={handleToggle}>
              <RiCloseLine />
            </div>
          </div>

          <div className="nav--actions" >
            <Link to="/" >
              <RiUserLine color="white" />
            </Link>
            <RiShoppingCartLine />

            {/* toggle button  */}

            <div
              className="nav--toggle"
              id="nav--toggle"
              onClick={handleToggle}
            >
              <RiMenuLine />
            </div>
          </div>
        </nav>
      </header>

      {/* ==================== MAIN ==================== */}

      <main className="main">
        {/* ==================== HOME ==================== */}

        <section className="home section" id="home">
          <div className="home--container container grid">
            <img src={homeCactus} alt="image" className="home--img" />

            <div className="home--data">
              <h1 className="home--title">
                ORNAMENTAL <br />
                <span>PLANTS</span> FOR <br />
                YOUR HOME <br />
              </h1>

              <p className="home--description">
                We design ornamental plants for your home in-house for an
                original style and quality you won't find anywhere else.
              </p>

              <div className="home--buttons">
                <a href="#" className="button">
                  <span>
                    <RiArrowRightLine />
                  </span>
                  GO TO SHOP
                </a>

                <a href="#" className="button--link">
                  MORE DETAILS
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== NEWS ==================== */}

      <section className="new section" id="new">
        <div className="new--container container grid">
          <div className="new--data">
            <h2 className="section--title">
              NEW PLANTS FOR <br />
              YOUR HOME
            </h2>

            <p className="new--description">
              Select new ornamental plants for home decoration and obtain an
              atmosphere of harmony and freshness.
            </p>
          </div>

          <div className="new--content grid">
            <article className="new--card">
              <img src={newCactus1} alt="image" className="new--img" />
              <h2 className="new--title">Gymnocalycium Cactus</h2>
            </article>

            <article className="new--card">
              <img src={newCactus2} alt="image" className="new--img" />
              <h2 className="new--title">Lily Pad Succulent</h2>
            </article>

            <article className="new--card">
              <img src={newCactus3} alt="image" className="new--img" />
              <h2 className="new--title">Rebutia Cactus</h2>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== SHOP ==================== */}

      <section className="shop section" id="shop">
        <h2 className="section--title">THE BEST PLANTS</h2>

        <div className="shop--container container grid">
          <article className="shop-card">
            <img src={shopCactus1} alt="image" className="shop--img" />

            <h3 className="shop--title">
              Gymnocalycium <br />
              Cactus
            </h3>
            <span className="shop--price">$15</span>

            <button className="shop--button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="shop-card">
            <img src={shopCactus2} alt="image" className="shop--img" />

            <h3 className="shop--title">
              Echeveria <br />
              Succulent
            </h3>
            <span className="shop--price">$10</span>

            <button className="shop--button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="shop-card">
            <img src={shopCactus3} alt="image" className="shop--img" />

            <h3 className="shop--title">
              Ferocactus <br />
              Cactus
            </h3>
            <span className="shop--price">$15</span>

            <button className="shop--button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="shop-card">
            <img src={shopCactus4} alt="image" className="shop--img" />

            <h3 className="shop--title">
              Key Lime Pie <br />
              Succulent
            </h3>
            <span className="shop--price">$10</span>

            <button className="shop--button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="shop-card">
            <img src={shopCactus5} alt="image" className="shop--img" />

            <h3 className="shop--title">
              Melocactus <br />
              Cactus
            </h3>
            <span className="shop--price">$15</span>

            <button className="shop--button">
              <RiShoppingBagLine />
            </button>
          </article>
        </div>
      </section>

      {/* ==================== CARE ==================== */}

      <section className="care section" id="care">
        <h2 className="section--title">
          CARE AND HEALTH FOR <br />
          YOUR CACTUS
        </h2>

        <div className="care--container container grid">
          <img src={careCactus} alt="image" className="care--img" />

          <ul className="care--list">
            <li className="care--item">
              <RiCheckboxFill color="64CD8A" size="2.8rem" />

              <p>
                In cold times, add water once a month and during the summer do
                it when the soil is very dry.
              </p>
            </li>

            <li className="care--item">
              <RiCheckboxFill color="64CD8A" size="2rem" />

              <p>
                Have good drainage so that the cactus does not accumulate water.
              </p>
            </li>

            <li className="care--item">
              <RiCheckboxFill color="64CD8A" size="2rem" />

              <p>
                Place your cactus or succulent in a location with indirect
                light.
              </p>
            </li>

            <li className="care--item">
              <RiCheckboxFill color="64CD8A" size="2.8rem" />

              <p>
                Do not water more than necessary, as it can accumulate too much
                water and the plant will rot.
              </p>
            </li>

            <li className="care--item">
              <RiCheckboxFill color="64CD8A" size="2.5rem" />

              <p>
                Do not expose to high temperatures, as succulent plants are not
                fans of extremes.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}

      <section className="contact section" id="contact">
        <h2 className="section--title">
          YOU WANT A CACTUS <br />
          CONTACT US
        </h2>

        <div className="contact--container container grid">
          <img src={contactCactus} alt="image" className="contact--img" />

          <div className="contact--content">
            <div>
              <h3 className="contact--title">Write to us</h3>

              <div className="contact--social">
                <a href="#" target="_blank">
                  <RiWhatsappFill />
                </a>

                <a href="#" target="_blank">
                  <RiMessengerFill />
                </a>

                <a href="#" target="_blank">
                  <RiMailFill />
                </a>
              </div>
            </div>

            <div>
              <h3 className="contact--title">Call us at the numbers</h3>

              <address className="contact--info">
                +01604-931431 <br />
                +11-012345
              </address>
            </div>

            <div>
              <h3 className="contact--title">Find us here</h3>

              <address className="contact--info">Av. Moon #4321</address>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}

      <footer className="footer">
        <div className="footer--container container grid">
          <div>
            <a href="#" className="footer--logo">
              <RiCactusLine color="64CD8A" size="1.95rem" /> Cactus
            </a>

            <p className="footer--description">
              Choose the best <br />
              plants for your home.
            </p>
          </div>

          <div className="footer--content grid">
            <div>
              <h3 className="footer--title">COMPANY</h3>

              <ul className="footer--links">
                <li>
                  <a href="#" className="footer--link">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#" className="footer--link">
                    Products
                  </a>
                </li>

                <li>
                  <a href="#" className="footer--link">
                    Features
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer--title">INFORMATION</h3>

              <ul className="footer--links">
                <li>
                  <a href="#" className="footer--link">
                    Blogs & News
                  </a>
                </li>

                <li>
                  <a href="#" className="footer--link">
                    Contacts Us
                  </a>
                </li>

                <li>
                  <a href="#" className="footer--link">
                    {" "}
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer--title">SOCIAL MEDIA</h3>

              <div className="footer--social">
                <a href="#" target="_blank" className="footer--social-link">
                  <RiFacebookCircleFill />
                </a>

                <a href="#" target="_blank" className="footer--social-link">
                  <RiInstagramFill />
                </a>

                <a href="#" target="_blank" className="footer--social-link">
                  <RiLinkedinBoxFill />
                </a>
              </div>
            </div>
          </div>
        </div>

        <span className="footer--copy">
          &#169; Copyright 2024 All Rights Reserved by
          <span> : Athar</span>
        </span>
      </footer>

      {/* ========== SCROLL UP ========== */}

      <a
        href="#"
        className={`scrollup ${scrollY >= 350 ? "show-scroll" : ""}`}
        id="scroll-up"
      >
        <RiArrowUpLine />
      </a>
    </>
  );
};

export default Main;
