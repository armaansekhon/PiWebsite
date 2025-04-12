import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import imgsrc from "../assets/staff.jpg";

const ROTATION_RANGE = 30;

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / rect.height) - 0.5) * -ROTATION_RANGE;
    const rY = ((mouseX / rect.width) - 0.5) * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.6 }}
      style={{
        transformStyle: "preserve-3d",
        transform,
        willChange: "transform",
      }}
      className="relative h-[26vw]   w-[45vw] rounded-xl  bg-gradient-to-br from-orange-200 to-orange-500 shadow-xl"
    >
      {/* Depth Layer */}
      <motion.div
        style={{
          transform: "translateZ(60px)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="absolute inset-5 bg-white rounded-xl shadow-lg flex items-center justify-center"
      >
        <motion.img
          src={imgsrc}
          alt="Showcase"
          className="w-full h-full object-cover rounded-xl"
          style={{
            transform: "translateZ(30px)",
            willChange: "transform",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Hover = () => {
  return (
    <div className="w-full  flex items-center justify-center">
      <TiltCard />
    </div>
  );
};
motion
export default Hover;
