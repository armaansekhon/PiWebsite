
import React from "react"
import "../src/assets/data.js"
import Firstt from "./components/Firstt"
import Button from "./components/Button"
import ScrollableImageGrid from "./components/ScrollableImg"
import Tabs from "./components/Tabs"
import CardStackScroll from "./components/Tabs"
import StackedCards from "./components/Tabs"
import ScrollT from "./components/Page.jsx"

import TiltedCard from "./components/TiltCard.jsx"

function App() {
 

  return (
   <div className=" w-full h-screen bg-white">
    
    <Firstt></Firstt>
    {/* <Button></Button> */}
    {/* <ScrollableImageGrid></ScrollableImageGrid> */}
{/* <ScrollT></ScrollT> */}

{/* <TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
  */}
   </div>
   
    
  )
}

export default App
