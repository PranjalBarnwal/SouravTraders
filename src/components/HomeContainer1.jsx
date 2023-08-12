import React, { useState, useEffect } from 'react';
import './HomeContainer1.css';
import BathRoom from './../assets/BathRoom.png';
import Aos from "aos";
import "aos/dist/aos.css";

const HomeContainer1 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); 



  return (
    <>
      <div className="homecontainer" >
        <div className="homecontainer-child">
          <div className="homecontainer-text font1" data-aos="fade-right">
            ciatis esse atque mole quae, amet necessitatibus nisi maxime voluptate voluptatem aperiam vero?
          </div>
          <div className="homecontainer-img" data-aos="fade-left">
            <img src={BathRoom} alt="" />
          </div>
        </div>
      </div>
      {<div className="scroll_down" ></div>}
    </>
  );
};

export default HomeContainer1;
