import React from "react";
import Button from "./Button";
import Buttontwo from "./Button2";

const BloomrStyleCard = ({ subtitle, title, description, videoSrc ,bgClass,}) => {
  return (
    <div className={`bg-gradient-to-br ${bgClass} rounded-[40px] p-10 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-10 w-full h-full shadow-lg`}>

      {/* Left: Video */}
      <div className="w-full mt-12 ml-3 mr-25 h-full  md:w-1/3">
        <video
        style={{ transform: 'rotateY(-10deg) rotateX(5deg) scale(1.05)' }}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="rounded-[32px] w-full h-[75%] object-cover shadow-2xl transform rotate-y-6 scale-105 transition-all duration-500"
        />
      </div>

      {/* Right: Text content */}
      <div className="w-full md:w-1/2 mt-8  text-white">
        <span className={`text-white  font-jB tracking-widest text-4xl   py-1 rounded-full  uppercase inline-block mb-4`}>
          {subtitle}
        </span>
        <h2 className="text-2xl font-jr md:text-3xl font-semibold mb-4 leading-snug">
          {title}
        </h2>
        <div className="text-white font-jr text-base md:text-lg leading-relaxed">
          {description}
        </div>
        <div><Buttontwo></Buttontwo></div>
      </div>
    </div>
  );
};

export default BloomrStyleCard;
