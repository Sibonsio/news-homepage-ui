import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import {useState} from 'react'

const App = () => {
  const [isClicked, setIsClicked] = useState(false)
  
const handleClick = ()=>{
  setIsClicked(!isClicked)
}
  return (
    <>
    <Navbar handleClick={handleClick}/>
    {isClicked && <Sidebar  handleClose={handleClick}/>}
    <Hero/>
    </>
  )
}

export default App
