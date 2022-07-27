import React from "react";
import hero_banner from "../Assets/hero-banner.png";
import style from "./header.module.css";

const Header = () => {
  return (
    <section className={style.header_wrapper}>
      <div className={style.header_info}>
        <p className={style.p}>ToreHub Marketing Agency</p>
        <h1>
          We are available <br /> for Marketing
        </h1>
        <p className={style.header_note}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> temporthem incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Get Started</button>
      </div>
      <figure className={style.header_img}>
        <img src={hero_banner} alt="Hero" />
      </figure>
    </section>
  );
};

export default Header;
