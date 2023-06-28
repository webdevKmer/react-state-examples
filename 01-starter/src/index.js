import React, {useState} from "react"
import Header from './Header.js'
import Footer from './Footer.js'
import MainArea from './MainArea.js'
import SideBar from './SideBar.js'
import { createRoot } from "react-dom/client"

function App() {
  const [size, setSize] = useState(10)
  const [color, setColor] = useState("blue")
  const [like, setLike] = useState(0)

  const handleSize = (e) => {
    setSize(e.target.value)
  }
  const handleColor = (e) => {
    setColor(e.target.value);
  }
  const changeFontStyle = () => {
    setSize(20)
    setColor('pink')
  }
  const changeFontSize = () => {
    setSize(30)
  }
  const handleLike = () => {
    setLike(prev => prev+1)
  }

  return (
    <div className="grid-parent">
      <Header size={size} color={color} like={like}/>      
      <SideBar size={size} color={color} handleSize={handleSize} handleColor={handleColor} changeFontStyle={changeFontStyle}/>     
      <MainArea size={size}/>      
      <Footer handleLike={handleLike} changeFontSize={changeFontSize}/>      
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
