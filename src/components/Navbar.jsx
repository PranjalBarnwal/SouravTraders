import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";



const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); 
  const [toggle, setToggle] = useState(false);

  const navHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-title font1" data-aos="fade-right">Sourav Traders</div>

        {toggle ? (
          <div className="navbar-close" onClick={navHandler}>
            <RxCross1 />
          </div>
        ) : (
          <div className="navbar-open" onClick={navHandler}>
            <RxHamburgerMenu />
          </div>
        )}

        <div className="navbar-list font1"   >
          <a href="#" data-aos="fade-left" data-aos-duration="1500">Home</a>
          <a href="#" data-aos="fade-left" data-aos-duration="1300">Products</a>
          <a href="#" data-aos="fade-left" data-aos-duration="1100">Reach Us</a>
          <a href="#" data-aos="fade-left" data-aos-duration="900">About Us</a>
        </div>
      </div>

      <div className="responsive-nav-parent">
        <div className={toggle ? "responsive-nav nav-toggle" : "responsive-nav"}>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Reach Us</a>
          <a href="#">About Us</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
