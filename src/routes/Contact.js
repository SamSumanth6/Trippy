import React from 'react'
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import ContactImg from "../assests/contact1.jpg"
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Hero
            cName="hero-mid"
            heroImg={ContactImg}
            title="Contact"
            buttonText="Travel Plan"
            btnCname="hide"
            url="/"
        />
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact