
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import CircularText from "./Circlet";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 border-b border-gray-700 pb-8 sm:pb-10 md:pb-12">
        {/* Company Info with CircularText */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="relative w-32  h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4 sm:mb-6">
            <CircularText
              text="PISOFT * INFORMATICS * "
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
          <p className="text-gray-400 mt-30 leading-relaxed text-sm sm:text-base md:text-lg text-center sm:text-left mt-4 sm:mt-6 md:mt-9">
            We help you build and scale your digital presence with cutting-edge web, mobile, and cloud technologies. Trusted by global businesses.
          </p>
          <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
            <a href="#" className="hover:text-blue-400 transition text-lg sm:text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition text-lg sm:text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-400 transition text-lg sm:text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400 transition text-lg sm:text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Important Links */}
        <div className="flex flex-col items-center sm:items-start md:mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
            Important Links
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-base sm:text-lg">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
            Contact Us
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Plot No C-86, Pannu Tower
          </p>
          <p className="text-gray-400 text-base sm:text-lg">
            2nd Floor, Phase 7, Industrial Area,
          </p>
          <p className="text-gray-400 text-base sm:text-lg">
            Mohali (Punjab) opp. Cheema Boiler India
          </p>
          <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg">
            Email: info@youritcompany.com
          </p>
          <p className="text-gray-400 text-base sm:text-lg">
            Phone: +918288029930
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10 md:mt-12">
        © {new Date().getFullYear()} Your IT Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
