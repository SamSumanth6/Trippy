import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutImg from "../assests/night.jpg"

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="About"
            buttonText="Travel Plan"
            btnCname="hide"
            url="/"
        />
    </div>
  );
};

export default About;
