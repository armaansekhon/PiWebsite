import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    <div className="relative w-full px-4 py-10">
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
              className={`relative group rounded-[2rem] p-2 shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden ${
                hoveredIndex === index
                  ? `${hoverStyles[index % hoverStyles.length]} before:absolute   `
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
                transition={{ duration: 0.3 }}
                className={`absolute bottom-[10px] right-[6px] w-18 h-18 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-10 ${
                  hoveredIndex === index
                    ? hoverStyles[index % hoverStyles.length]
                    : "bg-white text-black"
                }`}
              >
                <ArrowUpRight
                  size={20}
                  className={hoveredIndex === index ? "text-white" : "text-black"}
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Pagination */}
      <div className="absolute mt-10 left-4 flex items-center gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === activeIndex ? "bg-orange-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="absolute mt-10 right-4 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}