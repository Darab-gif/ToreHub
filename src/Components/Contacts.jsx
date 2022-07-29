import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <section className={style.contact_wrapper}>
      <div className={style.contact_info}>
        <h1>Let's Contact With Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <form action="" className={style.contact_form}>
        <div className={style.input_wrapper}>
          <input
            type="text"
            required
            placeholder="Your Name*"
            className={style.input_field}
          />
          <input
            type="email"
            name=""
            id=""
            className={style.input_field}
            required
            placeholder="Email address*"
          />
        </div>
        <div className={style.input_wrapper}>
          <input
            type="text"
            placeholder="Subject"
            className={style.input_field}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Phone Number"
            className={style.input_field}
          />
        </div>
        <textarea
          name=""
          id=""
          className={style.input_field}
          placeholder="Your Message...*"
        ></textarea>
        <div className={style.checklist_wrapper}>
          <input type="checkbox" name="" id="" className={style.checklist} />
          <label for="terms" className={style.label}>
            Accept{" "}
            <a href="/" className={style.label_link}>
              Terms of Services
            </a>{" "}
            and{" "}
            <a href="/" className={style.label_link}>
              Privacy Policy
            </a>
          </label>
        </div>

        <input type="submit" value="Send Message" className={style.btn} />
      </form>
    </section>
  );
};

export default Contact;
