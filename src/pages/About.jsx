import React, { useEffect, useRef, useState } from "react";
import BlurText from "../components/BlurText";
import Navbar from "../components/Navbar";
import { Example } from "../components/Corn";
import Lanyard from "../components/About/Lanyard";
import Tech from "../components/About/Tech";

function About() {
  const aboutSectionRef = useRef(null);
  const [showLanyard, setShowLanyard] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLanyard(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full bg-white p-6 relative overflow-hidden">
      {/* Navbar */}
      <div className="absolute z-50 top-12 left-0">
        <Navbar />
      </div>

      {/* Hamburger Icon */}
      <div className="fixed top-8 right-0 z-50 flex items-center space-x-4">
        <Example />
      </div>

      {/* === Section with Lanyard === */}
      <section ref={aboutSectionRef} className="h-screen flex flex-row items-start relative">
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
               Pisoft Informatics Private Limited is a dynamic and rapidly growing IT company established in 2016.The company located in Mohali (Punjab) With a diverse portfolio of clients both nationally and internationally, we are dedicated to delivering cutting-edge solutions across various domains, including software development, web development, Android services, ERP solutions, Technical Support, as well as design and implementation.
              </p>
              <p className="mt-4">
                Our greatest asset is our efficient and experienced team, equipped with modern infrastructure and a vibrant group of young, competitive professionals. We are committed to providing high-quality, tailored solutions that meet the unique needs of our clients, ensuring their success in a fast-evolving digital landscape
              </p>
            </div>
          </div>
        </div>

        {/* Lanyard only shows on first section */}
        {showLanyard && (
          <div className="absolute right-0 top-0 h-full w-1/3 z-0">
            <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
          </div>
        )}
      </section>

      {/* === Next Section === */}
      <section className="h-screen bg-gray-100">
        <Tech></Tech>
      </section>
    </div>
  );
}

export default About;
