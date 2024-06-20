import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import ServiceImg from "../assests/2.jpg";
import Footer from "../components/Footer/Footer";
import Trip from '../components/Trip/Trip'
import { useEffect } from 'react';

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <Trip title="Explore Our Trips"/>
      <Footer/>
    </div>
  );
};

export default Service;
