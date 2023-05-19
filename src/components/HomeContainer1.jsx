import React, { useState, useEffect } from 'react';
import './HomeContainer1.css';
import BathRoom from './../assets/BathRoom.png';

const HomeContainer1 = () => {
 



  return (
    <>
      <div className="homecontainer">
        <div className="homecontainer-child">
          <div className="homecontainer-text font1">
            ciatis esse atque mole quae, amet necessitatibus nisi maxime voluptate voluptatem aperiam vero?
          </div>
          <div className="homecontainer-img">
            <img src={BathRoom} alt="" />
          </div>
        </div>
      </div>
      {<div className="scroll_down" ></div>}
    </>
  );
};

export default HomeContainer1;
