import React from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videosrc from "../assets/p2.mp4";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Firstt() {
    const svgRef = useRef(null);
    const outerref = useRef(null);
    const staticTextRef = useRef(null);
    const text = "Pisoft is a cutting-edge IT solutions Our team of experts combines creativity and technical excellence to deliver top-tier solutions tailored to your needs. At Pisoft, we turn ideas into powerful digital realities.";
    const [letterRef, setletterRef] = useArrayRef();
    const triggerRef = useRef(null);
    const vnavRef = useRef(null);

    function useArrayRef() {
        const letterRefs = useRef([]);
        letterRefs.current = [];
        return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
    }

    useGSAP(() => {
        // Main animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: outerref.current,
                start: 'top top',
                end: 'bottom top',
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
            },
        });

        // SVG scaling animation
        tl.fromTo(svgRef.current, 
            { scale: 1 ,transformOrigin: "center center"}, // Start scale
            { scale: 33, ease: 'power1.inOut' } // End scale
        );

        // Static text fade out
        tl.to(staticTextRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'none'
        }, 0);

        tl.to(vnavRef.current, {
            color:"white",
            duration: 0.3,
            ease: 'none'
        }, 0);

        // Text color transition
        const colorTl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top 90%",
                end: "bottom 50%",
                scrub: 1,
                markers: true,
                toggleActions: "play none none reverse"
            }
        });

        colorTl.to(letterRef.current, {
            color: "black",
            stagger: {
                each: 15,
                ease: "power1.inOut"
              },
              duration: 1,
             
        });

        // Always refresh after setting triggers
        ScrollTrigger.refresh();
    }, []);

    return (
        <ReactLenis root>
            <>
                <div ref={outerref} className="relative h-screen w-full flex justify-center overflow-hidden">
                    {/* Video Background */}
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

                    {/* SVG Mask */}
                    <svg ref={svgRef} width="100%" height="100%" className='relative w-full h-full '>
                        <defs>
                            <mask id="textmask">
                                <rect width="100%" height="100%" fill='white' />
                                <text 
                                    className='font-bebas select-none text-black text-[24vw] md:text-[36vw] tracking-wider'
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
                        <rect width="100%" height="100%" fill="white" mask='url(#textmask)'></rect>
                    </svg>

                    {/* Static Text */}
                    <div ref={staticTextRef} className="absolute bottom-0 left-0 p-[5vw] text-black z-10">
                        <h1 className="font-jl text-[6vw] md:text-[5vw] font-bold">Engineering Excellence in</h1>
                        <h3 className="font-jl text-[4vw] md:text-[3vw] font-bold">Every Line of Code.</h3>
                    </div>

                    {/* Navigation Links */}
                    <div ref={vnavRef}
                     className="absolute bottom-0 right-0 p-[5vw] text-black z-10 flex flex-col md:flex-row gap-[2vw] md:gap-[4vw]">
                        <a className="text-[3vw] md:text-[1.75vw] font-jl cursor-pointer">Work</a>
                        <a className="text-[3vw] md:text-[1.75vw] font-jl cursor-pointer">About Us</a>
                        <a className="text-[3vw] md:text-[1.75vw] font-jl cursor-pointer">Services</a>
                        <a className="text-[3vw] md:text-[1.75vw] font-jl cursor-pointer">Contact Us</a>
                    </div>
                </div>

                <div className='h-screen w-screen bg-white'>
                    <div className='w-full h-15 bg-white'></div>

                    <div className="h-screen justify-center items-center bg-white">
                        <div ref={triggerRef} className='mt-40 pr-12 pl-20 w-8xl flex flex-wrap'>
                            {text.split(" ").map((letter, index) => (
                                <span key={index} ref={setletterRef} className="font-jl text-[3.5vw]/[4vw] font-bold text-gray-500 px-3">
                                    {letter}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        </ReactLenis>
    )
}