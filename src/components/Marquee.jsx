import React from "react";
import MarqueeItem from "./MarqueeItem";
import svg1 from "../svgs/1.svg";
import svg2 from "../svgs/2.svg";
import svg3 from "../svgs/3.svg";               
import svg4 from "../svgs/4.svg";
import svg5 from "../svgs/5.svg";   
import svg6 from "../svgs/6.svg";
import svg7 from "../svgs/7.svg";
import svg8 from "../svgs/8.svg";
import svg9 from "../svgs/9.svg";
import svg10 from "../svgs/10.svg";
import svg11 from "../svgs/11.svg";


const Marquee = () => {
  const upperMarquee = [
    svg1,
    svg2,
    svg3,
    svg4,
    svg5,
    svg6,
    svg7,
    svg8,
    svg9,
    svg10,
    svg11,
   
  ];

 

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />

    </div>
  );
};

export default Marquee;