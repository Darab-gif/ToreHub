import React, { useState } from "react";
import style from "./navbar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const navbar = style.navbar_list;
const close = style.close;
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav((pro) => !pro);
  };

  return (
    <nav className={style.navbar_wrapper}>
      <h1>ToreHub</h1>
      <ul className={`${nav ? navbar : close}`}>
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

      <div onClick={handleNavToggle} className={style.nav_icon}>
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  );
};

export default NavBar;
