import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Gallery from './Gallery';
import Footer from './Footer';

const Main = ({ isLoading }) => {

  return (
    <>
      <div className="relative w-full h-screen bg-gray-900">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full bg-gray-900">
            <p className="text-white text-lg font-semibold animate-pulse">Loading...</p>
          </div>
        ) : (
          <>
            <Navbar/>
            <HeroSection/>
            <Services/>
            {/* <Team/> */}
            <Contact/>
            <Gallery/>
            <Footer/>
          </>
        )}
      </div>
    </>
  );
};

export default Main;