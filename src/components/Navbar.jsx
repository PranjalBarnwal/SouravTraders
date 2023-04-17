import React, { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-title font1">Sourav Traders</div>

        {toggle ? (
          <div className="navbar-close" onClick={navHandler}>
            <RxCross1 />
          </div>
        ) : (
          <div className="navbar-open" onClick={navHandler}>
            <RxHamburgerMenu />
          </div>
        )}

        <div className="navbar-list font1">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Reach Us</a>
          <a href="#">About Us</a>
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
