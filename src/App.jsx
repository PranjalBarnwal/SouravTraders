import React, { useState } from "react";
import "./App.css";
// import "./Cursor.css"
import Home from "./components/Home";
// import Home2 from "./components/Home2";
import Cursor from "./Cursor";
import BrandSwiper from "./components/BrandSwiper";
const App = () => {
  
  return (
    <>
   
        <Cursor />  
      <div className="custom_bg">
        <div className="App-Home1">
          <Home  />
        </div>
        
      </div>
    </>
  );
};

export default App;
