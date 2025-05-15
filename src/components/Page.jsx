import { projects } from '../assets/data';
import Card from './CardItem';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
// import Tsparticles from './Tsparticles';

export default function ScrollT() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className="min-h-[300vh] mt-16 bg-white relative">
      {/* Container for Tsparticles, scoped to ScrollT */}
     

      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}