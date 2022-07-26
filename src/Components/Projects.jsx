import React from "react";
import style from "./project.module.css";

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
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
          <div className={style.project_card}>
            <h1>SEO Optimization</h1>
            <p>Designing a better cinema experience</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={style.project_container}>
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
