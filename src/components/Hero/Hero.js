import React from 'react'
import './Hero.css'
import HeroImg from '../../assests/12.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={HeroImg} alt="HeroImg" />

        <div className='hero-text'>
            <h1>Your Journey Your Story</h1>
            <p>Choose Your Favourite Destination</p>
            <a href="/" className='hero-btn'>
                Travel Plan
            </a>
        </div>
    </div>
  )
}

export default Hero