import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Orb from "./Orb"; // ensure Orb handles children
import logo from "/logopi.png"; // replace with actual logo path
import CircularText from "./Circlet";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-gray-700 pb-12">
        
        {/* Company Info with Orb and Logo */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-40 h-40 left-10 bottom-4">
     
  
   <CircularText
  text="PISOFT * INFORMATICS * "
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
   
  
       ></CircularText>
            
          </div>
         
          <p className="text-gray-400 leading-relaxed  mt-9 text-center md:text-left">
            We help you build and scale your digital presence with cutting-edge web, mobile, and cloud technologies. Trusted by global businesses.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-blue-400 transition text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition text-xl"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 transition text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition text-xl"><FaInstagram /></a>
          </div>
        </div>

        {/* Important Links */}
        <div className="md:mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-white">Important Links</h3>
          <ul className="space-y-3 text-gray-400 text-lg">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Address (Right-Aligned) */}
        <div className="text-right">
          <h3 className="text-2xl font-semibold  mb-6 text-white">Contact Us</h3>
          <p className="text-gray-400">Plot No C-86, Pannu Tower</p>
          <p className="text-gray-400">, 2nd Floor, Phase 7,Industrial area,</p>
          <p className="text-gray-400">Mohali (Punjab) opp. Cheema Boiler India.</p>
          <p className="text-gray-400 mt-4">Email: info@youritcompany.com</p>
          <p className="text-gray-400">Phone: +918288029930,</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Your IT Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
