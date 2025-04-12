import { motion, useTransform, useScroll} from "framer-motion";
import { useRef } from "react";
import BloomrStyleCards from "./BloomrStyleCard";
import vid1 from "../assets/erp3.mp4"
import vid2 from "../assets/softvid.mp4"
import vid3 from "../assets/web.mp4"
import vid4 from "../assets/mobile.mp4"
import vid5 from "../assets/DM.mp4"
import vid6 from "../assets/TC.mp4"


motion
const Horizontal = () => {
  return (
    <div className=" bg-url   ">
        <div className="flex justify-center mb-4">
         <h5 className=" font-jl text-[3vh] md:text-1xl font-semibold text-black tracking-wider">
         First impressions matter more than ever
         </h5>
       </div>
       <div className=" text Cont justify-center items-center ">
     
     
       <div className=" flex flex-col items-center justify-center mb-4">
         <h5 className=" font-jSB text-[5vh] md:text-1xl font-semibold text-black tracking-wider">
         Invest in good Solutions,with
         </h5>
         <h5 className=" font-jSB text-[5vh] md:text-1xl font-semibold text-black tracking-wider">
         Our Pisoft Dynamic
         </h5>
         <h5 className=" font-jSB text-[5vh] md:text-1xl font-semibold text-orange-400 tracking-wider">
     services
         </h5>
         
       </div>
     

     </div>
     
      <HorizontalScrollCarousel />
     
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-77%"]);

  return (
    <div ref={targetRef} style={{
      backgroundImage: `url('/services9.jpg')`, // Path to the image in the public folder
      backgroundSize: 'cover', // Adjusts the size of the background image
      backgroundPosition: 'center', // Centers the background image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    }} className="relative mb-20 h-[200vh] ">
        
      <div className="sticky top-0  flex h-[40%] items-center overflow-hidden">
      <motion.div style={{ x }} transition={{ type: "spring", stiffness: 50, damping: 20 }} className="flex gap-16 px-10">
  {cards.map((card) => (
    <div key={card.id} className="min-w-[1000px] min-h-[280px]  ">
<BloomrStyleCards key={card.id} {...card} />
    </div>
  ))}
</motion.div>
      </div>
    </div>
  );
};



export default Horizontal;

const cards = [
    {
      id: 1,
      subtitle: "ERP Solutions",
      title: "Your website will become your best sales tool",
      description:
        "We offer low cost ERP solutions to our clients in Education, Real Estate, Automobile and Transportation, making their job easy and highly managed",
      videoSrc: vid1,
      // bgClass: " from-cyan-300 to-blue-600"
      bgClass:"white border-white border-1"
      //  bgClass: " from-white/10 via-white/5 to-transparent  "
    //   bgClass: "from-[#0f172a] to-[#1e3a8a]",
    },
    {
      id: 2,
      subtitle: "Software Development",
      title: "Show off your features the right way",
      description:
        "We design, develop, host & maintain web sites. Here, gathering all the required information to develop, we design with the latest technology.",
      videoSrc: vid2,
  bgClass:"white border-white border-1"
    //   bgClass: "bg-gradient-to-br from-pink-100 via-pink-200 to-orange-100",
    //  bgClass: "from-[#FFC107] to-[#F06292]",
      
    },
    {
      id: 3,
      subtitle: "Web Development",
      title: "From concept to code to launch",
      description:
        "We have designed, developed, deployed and maintained enterprise-level web applications from the ground up that have enhanced the bottom line.",
      videoSrc: vid3,
      // bgClass: ["from-[#d8b4fe] to-[#6366f1]"]
        bgClass:"white border-white border-1"
    //   bgClass: "from-[#0f172a] to-[#1e3a8a]",

     
    },
    {
        id: 4,
        subtitle: "App Development",
        title: "From concept to code to launch",
        description:
          "We make your brand more relevant to your customers. Starting with comprehensive audience analysis, we uncover the topics that matter most. Then, we optimize your application to align perfectly with your customers' needs, creating a tailored experience that drives engagement",
        videoSrc: vid4,
        bgClass: "from-[#0f172a] to-[#1e3a8a]",
      },
      {
        id: 5,
        subtitle: "Digital Marketing",
        title: "From concept to code to launch",
        description:
          "We optimize your website to ensure that both customers and search engines can effortlessly discover and comprehend every page. Achieving maximum visibility requires a blend of robust technical infrastructure, thoughtful site architecture, and an outstanding user experience. Let us enhance your online presence and drive meaningful engagement!",
        videoSrc: vid5,
        bgClass: "from-[#bbf7d0] to-[#16a34a]",
      },
      {
        id: 6,
        subtitle: "Technical Support",
        title: "From concept to code to launch",
        description:
          "At Pisoft , we provide comprehensive technical support  in areas such as networking, cloud computing, and security. Our dedicated team is here to ensure that your systems run smoothly, addressing any issues promptly. With our expert guidance, you can focus on your core business while we handle your technical needs.",
        videoSrc: vid6,
        bgClass: "from-amber-300 to-orange-400",
      },
  ];
  