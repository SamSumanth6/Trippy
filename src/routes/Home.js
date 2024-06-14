import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import Hero from '../components/Hero/Hero'
import HeroImg from '../assests/12.jpg'
import Destination from '../components/Destination/Destination'

const Home = () => {
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
    </div>
  )
}

export default Home