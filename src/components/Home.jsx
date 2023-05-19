import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import HomeContainer1 from "./HomeContainer1"
import BrandContainer from './BrandContainer'
import BrandSwiper from './BrandSwiper'
const Home = () => {
  return (
    <div className='home-body'>
      <div className='nav-fixed'>
      <Navbar/>
      </div>
      <HomeContainer1/>
      <BrandContainer/>
    <BrandSwiper/>
    </div>
  )
}

export default Home
