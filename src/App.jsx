import React, { useState } from "react"
import NavBar from "./NavBar"
import Body from "./Body"

function App() {
 
const [darkMode, setDarkMode] = useState(false)

function toggleDarkMode(){
  setDarkMode((prevDarkMode) => !prevDarkMode)
}

  return (
    <div className="container">
     <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
     <Body darkMode={darkMode}/>
    </div>
  )
}

export default App
