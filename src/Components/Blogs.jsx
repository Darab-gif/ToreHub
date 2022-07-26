import React from "react";
import img1 from "../Assets/blog-1.jpg";
import img2 from "../Assets/blog-2.jpg";
import img3 from "../Assets/blog-3.jpg";
import img4 from "../Assets/blog-4.jpg";
import img5 from "../Assets/blog-5.jpg";

import style from "./blog.module.css";

function Blogs() {
  return (
    <section className={style.blog_wrapper}>
      <div className={style.blog_info}>
        <h1>Latest Articles Updated Weekly</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <section className={style.blog_container}>
        <figure className={style.blog_img}>
          <img src={img1} alt="Blog1" />
          <p>July 7, 2022</p>
          <h1>How to Become a Successful Entry Level UX Designer</h1>
        </figure>
        <aside className={style.blog_aside}>
          <div className={style.blog_card}>
            <figure className={style.blog_card_img}>
              <img src={img2} alt="" />
            </figure>
            <div>
              <p>July 26, 2022</p>
              <h1>2022 Local SEO Success: The Year of Everywhere</h1>
            </div>
          </div>
          <div className={style.blog_card}>
            <figure className={style.blog_card_img}>
              <img src={img3} alt="" />
            </figure>
            <div>
              <p>July 26, 2022</p>
              <h1>The Guide to Running a Client Discovery Process</h1>
            </div>
          </div>
          <div className={style.blog_card}>
            <figure className={style.blog_card_img}>
              <img src={img4} alt="" />
            </figure>
            <div>
              <p>July 26, 2022</p>
              <h1>3 Ways to Get Client Approval for Scope Changes</h1>
            </div>
          </div>
          <div className={style.blog_card}>
            <figure className={style.blog_card_img}>
              <img src={img5} alt="" />
            </figure>
            <div>
              <p>July 26, 2022</p>
              <h1>Top 21 Must-Read Blogs For Creative Agencies</h1>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
}

export default Blogs;
