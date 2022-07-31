import React from "react";
import Abouts from "./Components/Abouts";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Service from "./Components/Service";
import SubAbout from "./Components/SubAbout";
import "./App.css";

function App() {
  return (
    <section className="app_wrapper">
      <NavBar />
      <Header />
      <Service />
      <Projects />
      <Abouts />
      <SubAbout />
      <Blogs />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
