import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  // lenis options for configuration
  const lenisOptions = {
    lerp: 0.05,
    duration: 1.5,
    //  wheelMultiplier: 2.0, 
    smoothTouch: true, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
