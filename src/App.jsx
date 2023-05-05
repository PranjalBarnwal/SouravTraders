import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Cursor from "./Cursor";

const App = () => {
  return (
    <>
        <Cursor />
      <div className="custom_bg">
        <div className="App-Home1">
          <Home />
        </div>
        <div className="App-Home2"></div>
      </div>
    </>
  );
};

export default App;
