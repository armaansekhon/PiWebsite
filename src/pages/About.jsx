import React from "react";

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

      {/* hamburger*/}
      <div className="ml-auto fixed  top-8 right-0  z-100 flex items-center space-x-4">
        <Example />

   
      </div>


      <div className=" flex flex-row">
         <div className="mt-20">
          <div className="flex text-6xl font-jB "> <div className="ml-2 text-orange-400">Us</div></div>
        {/* <TrueFocus
          sentence="About Us"
          manualMode={false}
          blurAmount={1.5}
          className="font-jl"
          borderColor="#00D8FF"
          animationDuration={2}
          pauseBetweenAnimations={1}
        /> */}
      </div>
      

<Lanyard position={[0,0, 25]} gravity={[0, -40, 0]} />
     
      </div>

     
    </div>
  );
}

export default About;
