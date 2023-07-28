import "./Aboutus.css";
import React from "react";

const AboutUs = () => {
  return (
    <section className='py-16 bg-gray-100'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <div className='flex justify-between py-20'>
            <img
              src='https://navsanjeevansocialtrust.org/img/yoga.jpeg'
              alt='Hero 1'
              className='rounded w-1/2 px-5'
            />
            <img
              src='https://navsanjeevansocialtrust.org/img/1a.png'
              alt='Hero 2'
              className='rounded w-1/2 px-5'
            />
          </div>
        </div>
        <div className='px-20 md:w-1/2 mb-8 md:mb-0 '>
          <h1 className='tmb-4 aboutus-head '>OUR MISSION!</h1>
          <p className='text-gray-600 mb-8 aboutus-des aboutus-des'>
            At Navsanjeevan Social Trust, we are dedicated to empowering
            marginalized communities through education, healthcare, and skill
            development. Our mission is to create a more equitable society,
            ensuring a brighter future for children, women, and the elderly in
            need.
          </p>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Donate Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
