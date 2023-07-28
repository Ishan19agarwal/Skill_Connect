import "./Hero.css";
import React from "react";

const Hero = () => {
  return (
    <section className='py-16 px-16 bg-gray-100'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        <div className='px-20 md:w-1/2 mb-8 md:mb-0'>
          <h1 className=' font-bold mb-4 hero-head'>Who are we?</h1>
          <p className='text-gray-600 mb-8 hero-des'>
            Navsanjeevan social trust is a non-profit organization working since
            2013 for the rights of marginalized communities in the state of
            Maharashtra.
            <br />
            The organization is providing the necessary push for livelihood
            enhancement through Skill development programs.
          </p>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Learn More
          </button>
        </div>
        <div className='md:w-1/2'>
          <img
            src='https://navsanjeevansocialtrust.org/img/cumins5.png'
            alt='Hero'
            className='rounded hero-img'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
