import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import bgImage from "../assets/bgboxespng.png"


import videosrc from "../assets/p2.mp4";
import Navbar from "./Navbar";
import Hover from "./HoverCard";
import Marquee from "./Marquee";
import Button from "./Button";
import Horizontal from "./HorizontalScroll";
import ServiceList from "./ServiceCard";
import AccordionMenu from "./ServiceCard";
import ScrollT from "./Page";
import TrueFocus from "./FocusText";

gsap.registerPlugin(ScrollTrigger);

export default function Firstt() {
  const svgRef = useRef(null);
  const outerref = useRef(null);
  const staticTextRef = useRef(null);
  const triggerRef = useRef(null);
  const vnavRef = useRef(null);

  const text =
    "Pisoft Informatics is an outsourced software development company specializing in custom product development, legacy platform modernization, and data-driven eCommerce solutions.";

  // For animated word color change
  function useArrayRef() {
    const letterRefs = useRef([]);
    letterRefs.current = [];
    return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
  }

  const [letterRef, setletterRef] = useArrayRef();

  useGSAP(() => {
    // 🔧 Lenis + GSAP integration
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? window.scrollTo(0, value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // 🔥 Scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerref.current,
        start: "top top",
        end: "bottom+=10% top",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        scroller: document.body,
      },
    });

    tl.fromTo(
      svgRef.current,
      { scale: 1, transformOrigin: "center center" },
      { scale: 33, ease: "power1.inOut" }
    );

    tl.to(
      staticTextRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "none",
      },
      0
    );

    tl.to(
      vnavRef.current,
      {
        color: "white",
        duration: 0.3,
        ease: "none",
      },
      0
    );

    // ✏️ Text color change on scroll
    const colorTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
        toggleActions: "play none none reverse",
        scroller: document.body,
      },
    });

    colorTl.to(letterRef.current, {
      color: "black",
      stagger: { each: 15, ease: "power1.inOut" },
      duration: 1,
    });

    // ✅ Ensure proper refresh
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <ReactLenis root>
      <>
        {/* 🔳 Hero Section with ScrollTrigger */}
        <div
          ref={outerref}
          className="relative min-h-screen w-full flex justify-center overflow-hidden"
        >
          {/* 🎥 Background Video */}
          <div className="video absolute top-0 left-0 w-full h-full z-[-1]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              playsInline
              muted
              loop
              preload="auto"
            >
              <source src={videosrc} type="video/mp4" />
            </video>
          </div>

          {/* 🌀 SVG Scroll Animation */}
          <svg
            ref={svgRef}
            width="100%"
            height="100%"
            className="relative w-full h-full"
          >
            <defs>
              <mask id="textmask">
                <rect width="100%" height="100%" fill="white" />
                <text
                  className="font-bebas select-none text-black text-[24vw] md:text-[36vw] tracking-wider"
                  x="50%"
                  y="40%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="black"
                >
                  PISOFT
                </text>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="white"
              mask="url(#textmask)"
            />
          </svg>

          {/* ✨ Static Text */}
          <div
            ref={staticTextRef}
            className="absolute bottom-0 left-0 p-[5vw] text-black z-10"
          >
            <h1 className="font-jl text-[6vw] md:text-[5vw] font-bold">
              
              Engineering Excellence in
            </h1>
            <h3 className="font-jl text-[4vw] md:text-[3vw] font-bold">
              Every Line of Code.
            </h3>
          </div>

          {/* 🧭 Navigation Links */}
          <div
            ref={vnavRef}
            className="absolute bottom-0 right-0 p-[5vw] text-black z-10 flex flex-col md:flex-row gap-[2vw] md:gap-[4vw]"
          >
            {["Work", "About Us", "Services", "Contact Us"].map((link, idx) => (
              <a
                key={idx}
                className="text-[3vw] md:text-[1.75vw] font-jl cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* 🔽 Scroll Content Section */}
        <section className="min-h-screen w-full bg-white ">
          <Navbar />

          {/* 👇 Wrapper for content under Navbar */}
          <div className="flex flex-col md:flex-row justify-between  items-start px-[5vw] pt-[5vw] gap-[4vw]">
            {/* 📝 Left Text */}
            <div className="md:w-1/2 w-full">
              <h1 className="font-jB text-[8vw] md:text-[4.5vw] leading-tight">
                Turning Code into
              </h1>
              <h1 className="font-jB text-[8vw] md:text-[5vw] text-orange-400 leading-tight mt-[-1vw]">
                Impact.
              </h1>

              {/* 📜 Animated Text Reveal */}
              <div
                ref={triggerRef}
                className="mt-[2vw] flex flex-wrap gap-x-2 max-w-[90%]"
              >
                {text.split(" ").map((word, idx) => (
                  <span
                    key={idx}
                    ref={setletterRef}
                    className="font-jr text-[3.5vw] md:text-[1.45vw] font-bold text-gray-400"
                  >
                    {word}
                  </span>
                ))}
                <Button></Button>
              </div>
            </div>

            {/* 💫 Right Hover Card */}
            <div className="md:w-[45vw] w-full mt-[5vw] md:mt-0 relative z-10">
              <Hover />
            </div>
          </div>
          <div className="mt-12 overflow-hidden">
            {/* Centered Heading */}
            <div className="flex justify-center mb-4">
              <h5 className=" font-jl text-xl md:text-1xl font-semibold text-black tracking-wide">
                Trusted by Clients
              </h5>
            </div>

            {/* Marquee Component */}
            <Marquee />
          </div>
         

          
        </section>
        <section  style={{ }} className="min-h-screen bg-white   w-full  ">
        {/* bg-[url('/random1.jpg')] */}
     <div>
        <Horizontal></Horizontal>
       </div>
       <div>

       <div className="flex justify-center mb-4">
              <h5 className=" font-jl text-xl md:text-1xl font-semibold text-black tracking-wide">
                Have a Glimpse at Our
              </h5>
            </div>
            <TrueFocus 
sentence="Latest Works"
manualMode={false}
blurAmount={2}
borderColor="#00D8FF"
animationDuration={2}
pauseBetweenAnimations={1}
/>
<div className='mx-auto center w-3/4 mt-8 '>
    <div className='font-jr text-2xl text-orange-400'> Results matter.</div>
    
    <div className='font-jl text-[2.5vh]'>Discover how our customized solutions have delivered measurable
business outcomes for clients across various industries. Each case study highlights the
strategic impact of our work, turning challenges into opportunities for growth.

</div> 

    
   </div>
 

        
        
    <ScrollT></ScrollT>
       </div>
       <section className="bg-white-300 bg-cover  w-full" ><AccordionMenu></AccordionMenu></section>
        </section>

        
  
       
      </>
    </ReactLenis>
  );
}
