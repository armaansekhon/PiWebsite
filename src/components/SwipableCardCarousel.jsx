import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlurText from "./BlurText";
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
    <div className="relative w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10">
      <div className="flex justify-center sm:justify-start pl-0 sm:pl-5 mb-6 sm:mb-8 md:mb-10">
        <div className="text-3xl sm:text-4xl md:text-5xl mr-2 font-jSB mt-1 sm:mt-2">
          Latest
        </div>
        <RotatingText
          texts={['Insights', 'Blogs', 'Cases']}
          mainClassName="px-1 sm:px-2 md:px-2 text-3xl sm:text-4xl md:text-5xl font-jSB bg-orange-400 text-white overflow-hidden py-0.5 sm:py-0.9 md:py-1 justify-center rounded-lg"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-0.9 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
        <BlurText
          text="Stay ahead of the curve with our expert analysis, industry trends, and actionable advice. Our blog offers fresh perspectives on the challenges and opportunities in the tech landscape, helping you make informed decisions and drive innovation within your organization."
          delay={10}
          animateBy="words"
          direction="top"
          className="font-jr text-[2vh] sm:text-[2.2vh] md:text-[2.5vh] pl-0 sm:pl-6 w-full sm:w-[60%] text-black tracking-wider text-center sm:text-left"
        />
        <div className="mt-4 sm:mt-0 sm:ml-auto">
          <Dbutton Text="Explore More" />
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={25}
        slidesPerView="auto"
        className="!overflow-visible"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2.5, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: "350px",
              width: "300px",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 md:p-2 shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden ${
                hoveredIndex === index
                  ? hoverStyles[index % hoverStyles.length]
                  : "bg-white text-black"
              }`}
            >
              <div>
                <p className="font-jl text-sm sm:text-base mb-2 sm:mb-3">
                  {card.time}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-[2px] font-jSB leading-snug whitespace-pre-line">
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
                  opacity: { duration: hoveredIndex === index ? 0.3 : 0 },
                }}
                className="absolute bottom-[-20px] sm:bottom-[-30px] right-[-20px] sm:right-[-30px] z-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full flex items-center justify-center shadow-lg cursor-pointer bg-white"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10,
                  }}
                  transition={{
                    duration: 0.3,
                    opacity: { duration: hoveredIndex === index ? 0.3 : 0 },
                  }}
                  className={`absolute bottom-[20px] sm:bottom-[27px] right-[22px] sm:right-[30px] w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center shadow-lg cursor-pointer ${
                    hoveredIndex === index
                      ? hoverStyles[index % hoverStyles.length]
                      : "bg-white text-black"
                  }`}
                >
                  <ArrowUpRight
                    size={24}
                    className="text-white sm:size-30"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Pagination */}
      <div className="flex justify-between items-center mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                i === activeIndex ? "bg-orange-400" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            className="bg-orange-400 hover:bg-gray-300 p-1.5 sm:p-2 rounded-full"
          >
            <ArrowLeft size={20} className="text-white md:size-15 sm:size-24" />
          </button>
          <button
            onClick={handleNext}
            className="bg-orange-400 hover:bg-gray-300 p-1.5 sm:p-2 rounded-full"
          >
            <ArrowRight size={20} className="text-white  md:size-15 sm:size-24" />
          </button>
        </div>
      </div>
    </div>
  );
}