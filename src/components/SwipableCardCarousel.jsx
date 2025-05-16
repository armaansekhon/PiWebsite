import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlurText from "./BlurText";
import Buttontwo from "./Button2";
import Button from "./Button";
import Dbutton from "./Dbutton";
import RotatingText from "./RotatingText";

const cards = [
  {
    time: "10 min read",
    title:
      "Revolutionizing E-commerce Content Re-platforming: How Generative AI Can Alleviate Key Pain Points",
  },
  {
    time: "9 min read",
    title: "Build Your 10X Product with GenAI – A Conversation",
  },
  {
    time: "16 min read",
    title: "Contentful 101: Capabilities, Advantages, and Use Cases",
  },
  {
    time: "11 min read",
    title:
      "GenAI-Powered Product Discovery: Revolutionizing Next-Gen E-Commerce",
  },
  {
    time: "10 min read",
    title:
      "Revolutionizing E-commerce Content Re-platforming: How Generative AI Can Alleviate Key Pain Points",
  },
  {
    time: "9 min read",
    title: "Build Your 10X Product with GenAI – A Conversation",
  },
  {
    time: "16 min read",
    title: "Contentful 101: Capabilities, Advantages, and Use Cases",
  },
  {
    time: "11 min read",
    title:
      "GenAI-Powered Product Discovery: Revolutionizing Next-Gen E-Commerce",
  },
];

const hoverStyles = [
  "bg-blue-600 text-white",
  "bg-pink-600 text-white",
  "bg-green-600 text-white",
  "bg-yellow-400 text-black",
];

export default function SwipableCardCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="relative w-full px-4 py-10 ">
        <div className="flex pl-5 mb-10  ">
           <div className="text-5xl mr-2 font-jSB  mt-2"> Latest</div>
            <RotatingText
  texts={['Insights', 'Blogs', 'Cases',]}
  mainClassName="px-2   text-5xl mr-2 font-jSB sm:px-2 md:px-2 bg-orange-400 text-white overflow-hidden py-0.9 sm:py-1 md:py-2  justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>

        </div>
        
<div className="flex">
    
          <BlurText
  text=" Stay ahead of the curve with our expert analysis, industry trends, and actionable advice. Our blog offers fresh perspectives on the challenges and opportunities in the tech landscape, helping you make informed decisions and drive innovation within your organization."
  delay={10}
  animateBy="words"
  direction="top"
className=" font-jr  text-[2.4vh] pl-6 w-[60%] mb-15 md:text-1xl  text-black tracking-wider"
/>
<div className="  mt-5 ml-40"> <Dbutton Text="Explore More"></Dbutton></div>

</div>



      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        className="!overflow-visible"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} style={{ height: "370px", width: "335px" }}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group rounded-[2rem] p-6 shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden ${
                hoveredIndex === index
                  ? hoverStyles[index % hoverStyles.length]
                  : "bg-white text-black"
              }`}
            >
              <div>
                <p className="font-jl mb-3">{card.time}</p>
                <h2 className="text-3xl font-jSB leading-snug whitespace-pre-line">
                  {card.title}
                </h2>
              </div>

              {/* Floating Arrow Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 10,
                }}
                transition={{
                  duration: 0.3,
                  opacity: { duration: hoveredIndex === index ? 0.3 : 0 }, // Instant fade-out when hovering out
                }}
                className={`absolute bottom-[-30px] right-[-30px] z-10 w-32 h-32 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-10 ${
                  hoveredIndex === index ? "bg-white" : "bg-white text-black"
                }`}
              >
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 10,
                }}
                transition={{
                  duration: 0.3,
                  opacity: { duration: hoveredIndex === index ? 0.3 : 0 }, // Instant fade-out when hovering out
                }}
                className={`absolute bottom-[27px] right-[30px] z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg cursor-pointer  ${
                hoveredIndex === index
                  ? `${hoverStyles[index % hoverStyles.length]} before:absolute   `
                  : "bg-white text-black"
              }`}

                
              >


                <ArrowUpRight
                  size={30}
                  className="text-white"
                />
              </motion.div>


              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Pagination */}
      <div className="absolute mt-10 left-10 flex items-center gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === activeIndex ? "bg-orange-400" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <div className="absolute mt-10 right-10 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="bg-orange-400 hover:bg-gray-300 p-2 rounded-full"
        >
          <ArrowLeft size={24} className="text-white"/>
        </button>
        <button
          onClick={handleNext}
          className="bg-orange-400 hover:bg-gray-300 p-2 rounded-full"
        >
          <ArrowRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}