import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const closeMenuAndScroll = (target) => {
        setIsOpen(false);
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <>
    <nav className={`fixed top-0 left-0 w-full px-6 pt-8 pb-4 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? "bg-blue-950 bg-opacity-90" : "bg-transparent"}`}>
        <a href="/" className="text-white tracking-widest text-2xl font-extrabold" style={{ fontFamily: 'Fortrose, serif' }}>
          Smart Team
        </a>

        <div className="hidden md:flex items-center justify-center space-x-12 py-4">
          <Link to="home" smooth={true} duration={500} className="nav-link cursor-pointer text-cyan-400 font-bold tracking-widest hover:text-cyan-300 transition-colors duration-300">Home</Link>
          <Link to="services" smooth={true} duration={500} className="nav-link cursor-pointer text-cyan-400 font-bold tracking-widest hover:text-cyan-300 transition-colors duration-300">Services</Link>
          {/* <Link to="team" smooth={true} duration={500} className="nav-link cursor-pointer text-cyan-400 font-bold tracking-widest hover:text-cyan-300 transition-colors duration-300">Our Team</Link> */}
          <Link to="contact" smooth={true} duration={500} className="nav-link cursor-pointer text-cyan-400 font-bold tracking-widest hover:text-cyan-300 transition-colors duration-300">Contact</Link>
          <Link to="gallery" smooth={true} duration={500} className="nav-link cursor-pointer text-cyan-400 font-bold tracking-widest hover:text-cyan-300 transition-colors duration-300">Gallery</Link>
        </div>

        <Link to="contact" smooth={true} duration={500}>
          <button className="hidden cursor-pointer md:block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-bold transition-all duration-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600">
            Contact Us
          </button>
        </Link>

        <button className="md:hidden text-white focus:outline-none z-50" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          <svg className={`h-6 w-6 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div className={`fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm md:hidden transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-30`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['HOME', 'SERVICES', 'CONTACT', 'GALLERY'].map((item, index) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} 
               className={`text-cyan-400 text-2xl font-bold tracking-widest transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} hover:text-cyan-300 hover:-translate-y-1`}
               style={{ transitionDelay: `${index * 50}ms` }}
               onClick={() => closeMenuAndScroll(`#${item.toLowerCase().replace(' ', '')}`)}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar