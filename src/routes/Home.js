import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import Hero from '../components/Hero/Hero'
import HeroImg from '../assests/12.jpg'
import Destination from '../components/Destination/Destination'
import Trip from '../components/Trip/Trip'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Navbar />
        <Hero
            cName="hero"
            heroImg={HeroImg}
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            btnCname="show"
            url="/"
        />
        <Destination />
        <Trip title="Recent Trips"/>
        <Footer/>
    </div>
  )
}

export default Home