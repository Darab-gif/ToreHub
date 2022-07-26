import React from "react";
import style from "./contact.module.css";
const Contact = () => {
  return (
    <section className={style.contact_wrapper}>
      <div>
        <h1>Let's Contact With Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <form action="">
        <input type="text" required placeholder="Your Name*" />
        <input
          type="email"
          name=""
          id=""
          required
          placeholder="Email address*"
        />{" "}
        <br />
        <input type="text" placeholder="Subject" />
        <input type="number" name="" id="" placeholder="Phone Number" /> <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message...*"
        ></textarea>
        <input type="checkbox" name="" id="" />
        <p>
          Accept <span>Terms of services</span>and <span>Privacy Pulicy</span>
        </p>
        <input type="submit" value="Send Message" />
      </form>
    </section>
  );
};

export default Contact;
