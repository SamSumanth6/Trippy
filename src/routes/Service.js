import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import ServiceImg from "../assests/2.jpg";

const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Services"
        buttonText="Travel Plan"
        btnCname="hide"
        url="/"
      />
    </div>
  );
};

export default Service;
