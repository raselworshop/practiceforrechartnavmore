import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/Navbar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import RadialChart from './Components/RadialChart/RadialChart'
function App() {

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}

    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <RadialChart></RadialChart>
    </>
  )
}

export default App
