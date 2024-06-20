import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutImg from "../assests/night.jpg"
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs/AboutUs";
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <AboutUs/>
        <Footer/>
    </div>
  );
};

export default About;
