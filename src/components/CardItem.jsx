import { useTransform, motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import TiltedCard from './TiltCard';

const Card = ({ i, title, description, src, cap, progress, range, targetScale, url }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = container.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col h-[690px] w-[95%] rounded-[25px] overflow-hidden"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
        ></a>

        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <TiltedCard
            imageSrc={src}
            altText="Background"
            captionText={cap}
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full p-10 text-white pointer-events-none">
          <h2 className="mb-10 font-jB  text-[#fff] text-[6rem]">{title}</h2>
          <p className="font-jl text-3xl first-letter:text-[28px]">{description}</p>
        </div>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                left: mouseX,
                top: mouseY,
                translateX: '-50%',
                translateY: '-120%',
              }}
              className="fixed z-30 bg-black text-white text-sm px-3 py-1 rounded-lg pointer-events-none shadow-lg"
            >
              {url}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Card;
