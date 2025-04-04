import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";




export default function TextRevel()  {
    const text="Pisoft is a cutting-edge IT solutions company dedicated to transforming businesses with innovative technology. We specialize in software development, web solutions, and digital transformation, ensuring seamless user experiences and scalable growth. Our team of experts combines creativity and technical excellence to deliver top-tier solutions tailored to your needs. At Pisoft, we turn ideas into powerful digital realities. ";
    const [letterRef, setletterRef] = useArrayref();
    const triggerRef = useRef(null);


function useArrayref() {
    const letterRefs = useRef([]);
    
    letterRefs.current = [];
    return [letterRefs, (ref) => ref && letterRefs.current.push(ref)];
}
gsap.registerPlugin(ScrollTrigger);
useGSAP(() => {
    ScrollTrigger.refresh();
    gsap.from(letterRef.current, {
        scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 75%",
            end: "bottom 90%",
            scrub: true,
            markers: true,
        },
       color:"#2A2A2A",
        duration: 1.5,
        stagger: 0.2,
       
    });
}, [letterRef]);

return (
    <div className=" h-screen justify-center items-center bg-white">
        <div ref={triggerRef} className='mt-40  flex flex-wrap'>
            {text.split(" ").map((letter, index) => (
                <span key={index} ref={setletterRef} className=" font-jl text-2xl font-bold text-gray-800 px-2">
                    {letter}
                </span>
            ))}
        </div>
    </div>
);

}
