import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import imgscr from "../assets/latestLogoP.png"
import { SlideTabsExample } from "./SlideTabs";
import { Example } from "./Corn";

const Navbar = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`bg-white h-15 mt-4 pt-4 top-0 flex left-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="   py-3 flex ">
        {/* Logo */}
        <img className="h-12 ml-20 w-auto" src={imgscr}></img>

        {/* Desktop Nav
        <div className="hidden  md:flex ml-54  space-x-8    text-black">
          <a href="#About Us" className=" font-med text-xl   hover:text-blue-600 transition">About Us</a>
          <a href="#Services" className="font-med text-xl  hover:text-blue-600 transition">Services</a>
          <a href="#Our Work" className="font-med text-xl  hover:text-blue-600 transition">Our Work</a>
          <a href="#Technology " className="font-med text-xl  hover:text-blue-600 transition">Insights</a>
          <a href="#home" className=" font-med text-xl   hover:text-blue-600 transition">Contact Us</a>
         
        </div> */}
        <SlideTabsExample ></SlideTabsExample>

        <div className ><Example></Example></div>
      
        

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
       

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium text-gray-700 bg-white">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#services" className="block hover:text-blue-600">Services</a>
          <a href="#contact" className="block hover:text-blue-600">Contact us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
