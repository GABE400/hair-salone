import React from "react";

const Hero = () => {
  return (
    <div className='main-row full-width-column w-full mb-20'>
      <div className='banner bg-cover bg-center bg-hero-bg text-center p-10 text-white rounded-md shadow-md'>
        <h2 className='text-white text-2xl mb-4'>
          Experience the Art of Hair Styling
        </h2>
        <div className='text-container'>
          <p className='text-pink-500 text-lg'>
            Welcome to Hair Day Salon, where your style comes to life! Explore
            our cutting-edge services and transform your look with our talented
            team.
          </p>
        </div>
        <a
          href='#'
          className='btn-main inline-block px-6 py-3 mt-4 text-white bg-pink-500 rounded-md font-bold animate-button'
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
