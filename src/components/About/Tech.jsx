import React from 'react'
import Masonry from '../Masonary';
import BlurText from '../BlurText';
import TrueFocus from '../FocusText';

function Tech() {

    const data = [
  { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 500 },
  { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 500 },
  { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
  { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
  { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 600 },
  { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
  { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
  { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
  { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 800 },
  { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
];
  return (
    <div className="bg-white h-screen w-full">

 <BlurText
            text="Technologies"
            delay={200}
            animateBy="words"
            direction="top"
            className="mb-10 font-jB text-[4vw] md:text-1xl text-orange-400 tracking-wider"
          />

          <T
       
  


<Masonry data={data} />
    </div>
  )
}

export default Tech