import React, { useEffect, useRef, useState } from "react";
import BlurText from "../components/BlurText";
import Navbar from "../components/Navbar";
import { Example } from "../components/Corn";
import Lanyard from "../components/About/Lanyard";
import Tech from "../components/About/Tech";
import { motion, AnimatePresence } from "framer-motion"; // 👈 Add this
import Stepp from "../components/About/Stepp";
import Footer from "../components/Footer";

function About() {
  const aboutSectionRef = useRef(null);
  const techSectionRef = useRef(null);
  const [showLanyard, setShowLanyard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutSectionRef.current.getBoundingClientRect().top;
      const techTop = techSectionRef.current.getBoundingClientRect().top;

      // Show Lanyard if About section is mostly in view
      if (aboutTop >= -100 && techTop > window.innerHeight * 0.5) {
        setShowLanyard(true);
      } else {
        setShowLanyard(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-full bg-white p-6 relative overflow-hidden">
        {/* Navbar */}
        <div className="absolute z-50 top-12 left-0">
          <Navbar />
        </div>

        {/* Hamburger Icon */}
        <div className="fixed top-8 right-0 z-50 flex items-center space-x-4">
          <Example />
        </div>

        {/* === About Section === */}
        <section
          ref={aboutSectionRef}
          className="h-screen flex flex-row items-start relative"
        >
          <div className="w-[65%] z-10">
            <BlurText
              text="Bringing Ideas to Life"
              delay={200}
              animateBy="words"
              direction="top"
              className="mt-20 font-jB text-[4vw] md:text-1xl text-gray-900 tracking-wider"
            />

            <div className="mt-10">
              <BlurText
                text="About Us"
                delay={200}
                animateBy="words"
                direction="top"
                className="font-jSB text-[3vw] md:text-1xl text-orange-400 tracking-wider"
              />

              <div className="text-2xl font-jl text-gray-800 tracking-wider mt-6">
                <p>
                  Pisoft Informatics Private Limited is a dynamic and rapidly
                  growing IT company established in 2016. The company located in
                  Mohali (Punjab) With a diverse portfolio of clients both
                  nationally and internationally, we are dedicated to delivering
                  cutting-edge solutions across various domains ncluding software development, web development, Android services, ERP solutions, Technical Support, as well as design and implementation.
                </p>
                <p className="mt-4">
                 Our greatest asset is our efficient and experienced team, equipped with modern infrastructure and a vibrant group of young, competitive professionals. We are committed to providing high-quality, tailored solutions that meet the unique needs of our clients, ensuring their success in a fast-evolving digital landscape
                </p>
              </div>
            </div>
          </div>

          {/* === AnimatePresence + Framer Motion for smooth enter/exit === */}
          <AnimatePresence>
            {showLanyard && (
              <motion.div
                className="absolute bg-transparent right-0 top-0 w-1/3 z-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
              >
                <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* === Tech Section === */}
      <section ref={techSectionRef} className="h-screen bg-white">
        <Tech />
      </section>
      {/* === Tech Section === */}
      <section  className="h-screen mb-70 mt-20 bg-white">
        <div>
             <div className=' justify-center font-jr text-gray-500 text-center text-[20px]'>Our Work Approach</div>
    <div className=' justify-center font-jSB text-gray-900 text-center text-[50px]'>Driven by innovation</div>
      <div className=' justify-center font-jSB text-gray-900 text-center text-[50px]'>we engineer thoughtful digital journeys.</div>
    

        </div>
        <Stepp></Stepp>
      </section>
      <Footer></Footer>
      
    </>
  );
}

export default About;
