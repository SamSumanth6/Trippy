import React from 'react'
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import ContactImg from "../assests/contact1.jpg"

const Contact = () => {
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
    </div>
  )
}

export default Contact