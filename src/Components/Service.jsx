import React from "react";
import style from "./service.module.css";

const Service = () => {
  return (
    <section className={style.service_wrapper}>
      <div className={style.service_header}>
        <h1>Services We Provided</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <section className={style.service_layout}>
        <div className={style.service_card}>
          <div></div>
          <h2>SEO Optimatization</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
        </div>
        <div className={style.service_card}>
          <div></div>
          <h2>Digital Marketing</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
        </div>
        <div className={style.service_card}>
          <div></div>
          <h2>Market Research</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
        </div>
        <div className={style.service_card}>
          <div></div>
          <h2>Keywords Targeting</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
        </div>
        <div className={style.service_card}>
          <div></div>
          <h2>Email Marketing</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
        </div>
        <div className={style.service_card}>
          <div></div>
          <h2>Marketing & Reporting</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit tatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Service;
