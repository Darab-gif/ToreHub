import React from "react";
import style from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navbar_wrapper}>
      <h1>ToreHub</h1>
      <ul className={style.navbar_list}>
        <li>Home</li>
        <li>Service</li>
        <li>Project</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li className={style.btn}>
          <a href="/">Get Started</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
