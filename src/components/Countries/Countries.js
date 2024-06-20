import React from 'react';
import "./Countries.css";
import Hero from '../Hero/Hero';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const Countries = ({ places=[], destination, image }) => {  // Default to an empty array
  return (
    <div className='country-container'>
      <Navbar/>
      <Hero
            cName="hero-mid"
            heroImg={image}
            title={destination}
            buttonText="Travel Plan"
            btnCname="hide"
            url="/"
        />
      <h1>Tourist Places in {destination}</h1>
      <div className='card-wrapper'>
        {places.map((place, index) => (
          <div className='c-card' key={index}>
            <div className='c-image'>
              <img src={place.image} alt="img" />
            </div>
            <h4>{place.heading}</h4>
            <p>{place.text}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Countries;
