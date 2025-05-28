
import React from "react"

import { Routes,Route } from "react-router-dom"

import Firstt from "./components/Firstt"
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {
 

  return (
    <>
  <Routes>
    <Route path="/" Component={Firstt} />
    <Route path="/about" Component={About} />
     <Route path="/contact" Component={Contact} />
    



  </Routes>
    </>
   
    

    


   
   
    
  )
}

export default App
