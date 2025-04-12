import React from 'react'
import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import {motion} from 'framer-motion'
motion 

function Button() {
    const [ishover, setishover]=useState(false)
    

  return (
    <div >
        <div className='container cursor-pointer flex w-[20vh] right-[-24vh] top-1 flex-row relative bg-white border-amber-400 border-1 rounded-3xl overflow-clip justify-center items-center '
         onMouseEnter={( )=>{setishover(true)}} 
         onMouseLeave={( )=>{setishover(false)}}>
    <motion.div 
    animate={{scale:ishover?45:1,
        backgroundColor:ishover?'#ffA726':'#FFa726',
    }}
    transition={{
        ease:"easeIn",
        duration:0.3}}

    
    className='absolute left-[14px] circle h-[10px] w-[10px]  rounded-full '>
      
        
        
         </motion.div>
        <motion.div
        
         className='title z-1 font-jSB tracking-wide  p-1'>
            <motion.p animate={{x:ishover?-8:8, 
            color:ishover?'#ffffff':'#FFA726',

         }
    }>More About Us </motion.p>
    </motion.div>
    <ArrowRightIcon 
     color='white' className=' right-[12px]  w-[16px] h-[16px] stroke-3 absolute'></ArrowRightIcon>
</div>

    </div>
    

  )
  
}

export default Button