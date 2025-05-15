import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "John Doe",
    message: "This company transformed our business with their innovative solutions. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    message: "Amazing experience from start to finish. Their team is professional and attentive.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Johnson",
    message: "Our go-to partner for digital solutions. Results exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Emily Davis",
    message: "Top-notch service and support. We saw immediate improvements in our operations.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const RollingGallery = ({ autoplay = true, pauseOnHover = true, testimonials = [] }) => {
  testimonials = testimonials.length > 0 ? testimonials : TESTIMONIALS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1000 : 1600;
  const faceCount = testimonials.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 30, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) startInfiniteSpin(rotation.get());
    else controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") rotation.set(latest.rotateY);
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) startInfiniteSpin(rotation.get());
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-20">
      <h2 className="text-center text-5xl font-extrabold text-white mb-12">Testimonials</h2>
      <div
        className="flex h-[500px] items-center justify-center [perspective:1200px] [transform-style:preserve-3d]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="group absolute flex h-[300px] w-[300px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-2xl [backface-visibility:hidden] hover:scale-105 transition-transform duration-300"
              style={{
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mb-4 h-16 w-16 rounded-full object-cover border-4 border-gray-200"
              />
              <p className="text-sm font-medium text-gray-700 mb-2 line-clamp-4">"{testimonial.message}"</p>
              <h4 className="text-md font-bold text-gray-900">{testimonial.name}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
