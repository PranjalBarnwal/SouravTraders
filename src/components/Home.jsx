import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import HomeContainer1 from "./HomeContainer1"
import BrandContainer from './BrandContainer'
const Home = () => {
  return (
    <div className='home-body'>
      <div className='nav-fixed'>
      <Navbar/>
      </div>
      <HomeContainer1/>
      <BrandContainer/>
    </div>
  )
}

export default Home
