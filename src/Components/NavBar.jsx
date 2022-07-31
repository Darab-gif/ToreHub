import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav((pro) => !pro);
  };

  return (
    <nav className="navbar_wrapper">
      <h1>ToreHub</h1>
      <ul className={`${nav ? "navbar_list" : "navbar_list close"}`}>
        <li>Home</li>
        <li>Service</li>
        <li>Project</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li className="btn">
          <a href="/">Get Started</a>
        </li>
      </ul>

      <div onClick={handleNavToggle} className="nav_icon">
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  );
};

export default NavBar;
