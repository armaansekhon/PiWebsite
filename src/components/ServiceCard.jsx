import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
motion
const services = [
  {
    title: 'How Custom ERP Software can Scale my Business?',
    description:
      'Custom ERP solutions streamline your operations by automating workflows tailored to your needs. This improves efficiency, reduces costs, and supports long-term growth.',
  },
  {
    title: 'Do we offer Post-launch support?',
    description:
      'Yes, we provide ongoing maintenance, updates, and technical support after your project goes live. Our goal is to ensure long-term reliability and performance.',
  },
  { title: 'Why should you choose our company?',
    description:
      'We combine deep technical expertise with a user-first approach to deliver scalable, future-ready digital solutions. Our team works closely with you every step of the way.',
  },
  
  { title: 'Can you update your existing software with us?',
     description:
    'Absolutely! We specialize in modernizing legacy systems, optimizing performance, and adding new features without starting from scratch.',
},
  { title: 'What industries do you specialize in?',
    description:
      'We’ve worked with clients across finance, healthcare, retail, logistics, and education. Our adaptable team customizes solutions for your specific industry needs.',
  },
];

export default function AccordionMenu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mx-auto py-10 px-4">
         <div className="  bg-white  ">
        <div className="flex justify-center mb-4">
         <h5 className=" font-jl text-[3vh] md:text-1xl font-semibold text-black tracking-wider">
        Your Queries are Valuable to us 
         </h5>
       </div>
       <div className=" text Cont justify-center items-center ">
     
     
     <div className=" flex flex-col items-center justify-center mb-4">
       <h5 className=" font-jSB text-[7vh] md:text-1xl font-semibold text-black tracking-wider">
       You Might Be Wondering…
       </h5>
       
       {/* <h5 className=" font-jSB text-[5vh] md:text-1xl font-semibold text-orange-400 tracking-wider">
   services
       </h5> */}
       
     </div>
   

   </div>

     
    </div>
     
      
      <div className="divide-y">
        {services.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              onMouseEnter={() => toggle(index)}
              className={`cursor-pointer transition-colors duration-300 ${
                isActive ? 'bg-blue-50' : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-center py-10 px-4">
                <h3 className="font-jr text-4xl tracking-wide">{item.title}</h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={isActive ? { rotate: 45 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 hover:text-sky-600"
                >
                  {isActive ? (
                    <ArrowUpRight className="w-5 h-5 text-sky-600" />
                  ) : (
                    <Plus className="w-7 h-7" />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {isActive && item.description && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 flex justify-between items-start">
                      <p className="text-gray-600 font-jr tracking-wide max-w-6xl text-[2.2vh]">{item.description}</p>
                      <a
                        href="#"
                        className="text-xl font-jmed text-black flex items-center gap-2"
                      >
                        See details <ArrowUpRight className="w-7 h-7 text-sky-600" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
