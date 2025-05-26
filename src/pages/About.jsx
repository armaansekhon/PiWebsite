import React from "react";
import BlurText from "../components/BlurText";

import TrueFocus from "../components/FocusText";
import Navbar from "../components/Navbar";
import { Example } from "../components/Corn";
import Lanyard from "../components/About/Lanyard";

function About() {
  return (
    <div className=" p-6 w-full h-full bg-white">
      <div className=" z-100 left-[0]   top-12 absolute">
        <Navbar />
      </div>
      <BlurText
        text="Bringing Ideas to Life"
        delay={200}
        animateBy="words"
        direction="top"
        className=" mt-20 font-jB text-[4vw]  md:text-1xl  text-gray-900 tracking-wider"
      />

      {/* hamburger*/}
      <div className="ml-auto fixed  top-8 right-0  z-100 flex items-center space-x-4">
        <Example />
      </div>

      <div className=" flex flex-row">
        <div className="">
          <div className="flex font-jSB text-[3vw] ">
            <BlurText
              text="About Us"
              delay={200}
              animateBy="words"
              direction="top"
              className=" font-jSB text-[3vw] md:text-1xl  text-orange-400 tracking-wider"
            />
          </div>

          <div className="text-2xl font-jl text-gray-800 tracking-wider mt-10 w-[65%]">
            Pisoft Informatics Private Limited is a dynamic and rapidly growing IT company established in 2016.The company located in Mohali (Punjab) With a diverse portfolio of clients both nationally and internationally, we are dedicated to delivering cutting-edge solutions across various domains, including software development, web development, Android services, ERP solutions, Technical Support, as well as design and implementation.
<div className="mt-4">Our greatest asset is our efficient and experienced team, equipped with modern infrastructure and a vibrant group of young, competitive professionals. We are committed to providing high-quality, tailored solutions that meet the unique needs of our clients, ensuring their success in a fast-evolving digital landscape</div>

          </div>
        </div>

        <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}

export default About;
