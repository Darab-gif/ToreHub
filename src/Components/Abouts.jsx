import React from "react";
import img from "../Assets/project-2.jpg";
import style from "./about.module.css";

const Abouts = () => {
  return (
    <section className={style.about_wrapper}>
      <figure>
        <img src={img} alt="" />
        <button>
          <img src="" alt="" />
        </button>
      </figure>
      <section>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis
          eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
        </p>
        <div>
          <h2>Who We Are</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div>
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
        <div>
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
