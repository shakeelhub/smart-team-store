import React from 'react';
import { Link } from "react-scroll";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Hero from '../assets/Hero.webp';

const HeroSection = () => {
  return (
  <div id='home' className="relative h-full">
        <img src={Hero} alt="Smart City" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 -translate-y-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Smart Team</h1>
          <p className="text-cyan-300 max-w-2xl font-semibold mb-8">Delivering exceptional quality and trusted repairs, offering premium accessories for all your gadgets, all at prices you can't resist!</p>
          <Link to="services" smooth={true} duration={500}>
            <button className="px-8 py-3 text-cyan-400 border-2 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors mb-8">Read More</button>
          </Link>
          <div className="flex space-x-4">
            <a href="https://wa.me/+919884878611" target="_blank" rel="noopener noreferrer" className="w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full bg-green-500 text-white text-xl md:text-2xl shadow-lg hover:bg-green-600 hover:shadow-2xl hover:shadow-green-500 transition">
              <FaWhatsapp />
            </a>
            <a href="tel:+919884878611" className="w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl md:text-2xl shadow-lg hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500 transition">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
  )
}

export default HeroSection