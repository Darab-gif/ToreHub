import React from "react";
import style from "./subabout.module.css";

function SubAbout() {
  return (
    <section className={style.subabout_wrapper}>
      <div className={style.subabout_info}>
        <p>So What is Next?</p>
        <h1>Are You Ready? Let's get to Work!</h1>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default SubAbout;
