
import React from "react"

import { Routes,Route } from "react-router-dom"

import Firstt from "./components/Firstt"
import About from "./pages/About"


function App() {
 

  return (
    <>
  <Routes>
    <Route path="/" Component={Firstt} />
    <Route path="/about" Component={About} />
    



  </Routes>
    </>
   
    

    


   
   
    
  )
}

export default App
