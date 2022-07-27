import React from "react";
import style from "./project.module.css";
import proj1 from "../Assets/project-1.jpg";
import proj2 from "../Assets/project-2.jpg";
import proj3 from "../Assets/project-3.jpg";
import proj4 from "../Assets/project-4.jpg";
import proj5 from "../Assets/project-5.jpg";
import proj6 from "../Assets/project-6.jpg";

const Projects = () => {
  return (
    <section className={style.project_wrapper}>
      <div className={style.project_header}>
        <h1>Our Recent Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <section className={style.project_layout}>
        <div className={style.project_container}>
          <figure>
            <img
              src={proj1}
              alt=""
              width="510"
              height="700"
              loading="lazy"
              className={style.img_cover}
            />
          </figure>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <figure>
            <img
              src={proj2}
              alt=""
              width="510"
              height="700"
              loading="lazy"
              className={style.img_cover}
            />
          </figure>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <figure>
            <img
              src={proj3}
              alt=""
              width="510"
              height="700"
              loading="lazy"
              className={style.img_cover}
            />
          </figure>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <figure>
            <img
              src={proj4}
              alt=""
              width="510"
              height="700"
              loading="lazy"
              className={style.img_cover}
            />
          </figure>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <figure>
            <img
              src={proj5}
              alt=""
              width="510"
              height="700"
              loading="lazy"
              className={style.img_cover}
            />
          </figure>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <figure>
            <img
              src={proj6}
              alt=""
              width="510"
              height="700"
              loading="lazy"
              className={style.img_cover}
            />
          </figure>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
