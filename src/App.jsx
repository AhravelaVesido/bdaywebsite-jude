import { useState } from 'react'
import './App.css'
import Navigation from './modules/NavBar'
import Hero from './HeroPage'
import SectionDate from './section1'
import Carousel from './section2'
import Popup from './modules/popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Popup/>
     <Navigation/>
     <Hero/>
     <SectionDate />
     <Carousel/>
    </>
  )
}

export default App
