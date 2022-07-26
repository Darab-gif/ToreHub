import React from "react";
import Abouts from "./Components/Abouts";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contacts";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Service from "./Components/Service";
import SubAbout from "./Components/SubAbout";

function App() {
  return (
    <section>
      <NavBar />
      <Header />
      <Service />
      <Projects />
      <Abouts />
      <SubAbout />
      <Blogs />
      <Contact />
    </section>
  );
}

export default App;
