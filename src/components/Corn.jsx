import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { MotionConfig, motion } from "framer-motion";

export const Example = () => {
  const [active, setActive] = useState(false);
  const [bgImage, setBgImage] = useState("/images/default.jpg");

  const overlayRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const tlRef = useRef();

  const imageMap = {
    home: "/office.jpeg",
    about: "/office2.jpeg",
    services: "/images/services.jpg",
    contact: "/images/contact.jpg",
  };

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.set(overlayRef.current, { display: "flex" })
      .fromTo(
        overlayRef.current,
        { y: "-100%" },
        { y: 0, duration: 0.6, ease: "power4.out" }
      )
      .fromTo(
        leftRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        rightRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    tlRef.current = tl;
  }, []);

  useEffect(() => {
    if (active) {
      tlRef.current.play();
    } else {
      tlRef.current
        .reverse()
        .eventCallback("onReverseComplete", () => {
          gsap.set(overlayRef.current, { display: "none" });
        });
    }
  }, [active]);

  return (
    <>
      <div className="flex justify-center items-center h-10 rounded-xl bg-white px-4 z-50 relative">
        <h2 className="text-[2.9vh] font-jl text-black mr-4">Menu</h2>
        <AnimatedHamburgerButton active={active} setActive={setActive} />
      </div>

      {/* Fullscreen Nav Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-screen bg-black text-white z-40 hidden"
      >
        <div className="flex w-full h-full">
          {/* Branding - Left side */}
          <div
            ref={leftRef}
            className="w-[75%] flex flex-col justify-center px-10 relative overflow-hidden"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h1 className="text-7xl md:text-9xl font-bebas tracking-wide bg-clip-text text-transparent bg-white/80">
                PiSoft
              </h1>
              <h1 className="text-7xl md:text-9xl font-bebas tracking-wide bg-clip-text text-transparent bg-orange-400/80">
                Informatics
              </h1>
              <h3 className="mt-10 text-3xl md:text-5xl font-bebas tracking-wide bg-clip-text text-transparent bg-orange-400/80">
                Contact
              </h3>
              <div className="text-2xl md:text-2xl font-bebas tracking-wide bg-clip-text text-transparent bg-white/80">
                <p className="text-[3vh]">Plot No C-86, Pannu Tower</p>
                <p className="text-[3vh]">
                  2nd Floor, Phase 7, Industrial area,
                </p>
                <p className="text-[3vh]">
                  Mohali (Punjab) opp. Cheema Boiler India.
                </p>
                <p className="mt-4 text-[3vh]">
                  Email: info@youritcompany.com
                </p>
                <p className="text-[3vh]">Phone: +918288029930</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-60 z-0" />
          </div>

          {/* Nav Links - Right side */}
          <div
            ref={rightRef}
            className="w-1/2 flex flex-col items-center justify-center gap-10 font-jl text-5xl"
          >
            <a
              href="#home"
              onMouseEnter={() => setBgImage(imageMap.home)}
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onMouseEnter={() => setBgImage(imageMap.about)}
              className="hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#services"
              onMouseEnter={() => setBgImage(imageMap.services)}
              className="hover:text-blue-400 transition"
            >
              Services
            </a>
            <a
              href="#contact"
              onMouseEnter={() => setBgImage(imageMap.contact)}
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const AnimatedHamburgerButton = ({ active, setActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-10 w-12 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-8 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-black"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 8px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 8px)",
    },
  },
};
