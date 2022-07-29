import React from "react";
import img from "../Assets/project-2.jpg";
import style from "./about.module.css";
import { AiFillCaretRight } from "react-icons/ai";

const Abouts = () => {
  return (
    <section className={style.about_wrapper}>
      <figure>
        <img
          src={img}
          alt=""
          width="720"
          height="960"
          loading="lazy"
          className={style.img_cover}
        />
        <button className={style.play}>
          <AiFillCaretRight />
        </button>
      </figure>
      <section className={style.about_container}>
        <h1 className={style.about_title}>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis
          eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
        </p>
        <div className={style.about_info}>
          <h2>Who We Are</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className={style.about_box}>
          <h2>Our Success</h2>
          <p>
            <span></span>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <p>
            <span></span>It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout.
          </p>
          <p>
            <span></span>Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature.
          </p>
        </div>
        <div className={style.about_mission}>
          <h2>Our Mission</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Abouts;
