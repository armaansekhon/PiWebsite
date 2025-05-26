import React from 'react'
import TrueFocus from '../components/FocusText'
import Navbar from '../components/Navbar'

function About() {
  return (
<div className=' p-4 w-full h-full bg-white'>
  <Navbar></Navbar>


  <div className='text-8xl text-orange-400'>
    <TrueFocus
              sentence="About Us"
              manualMode={false}
              blurAmount={1.5}
              className="font-jl"
     
              borderColor="#00D8FF"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />

  </div>
   
   </div>


  )
}

export default About