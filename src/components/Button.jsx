import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function Button() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div
        className="cursor-pointer flex w-[20vh] sm:w-[24vh] md:w-[28vh] right-[-24vh] sm:right-[-28vh] md:right-[-32vh] top-1 flex-row relative bg-white border-amber-400 border rounded-3xl overflow-hidden justify-center items-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          animate={{
            scale: isHover ? 45 : 1,
            backgroundColor: isHover ? '#FF5722' : '#FFA726',
          }}
          transition={{
            ease: 'easeIn',
            duration: 0.3,
          }}
          className="absolute left-[14px] sm:left-[16px] md:left-[18px] circle h-[10px] w-[10px] rounded-full"
        />
        <motion.div className="z-10 font-jSB tracking-wide p-1">
          <motion.p
            animate={{
              x: isHover ? -8 : 8,
              color: isHover ? '#ffffff' : '#FFA726',
            }}
          >
            More About Us
          </motion.p>
        </motion.div>
        <ArrowRightIcon
          color="white"
          className="right-[12px] sm:right-[14px] md:right-[16px] w-[16px] h-[16px] stroke-[3] absolute"
        />
      </div>
    </div>
  );
}

export default Button;