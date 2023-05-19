import React from "react";
import eagle from "./../assets/eagle.jpg";
import asianpaints from "./../assets/asianpaints.png";
import kajaria from "./../assets/kajaria.png";
import oasis from "./../assets/oasis.png";
import roxo from "./../assets/roxo.png";
import utkarsh from "./../assets/utkarsh.png";
import watertech from "./../assets/watertech.png";
import "./BrandContainer.css";
const BrandContainer = () => {
  return (
    <div className="brandparent">
        <p>Brands We Offer</p>
      <div className="brandcontainer">
        <div className="container">
          <div className="block-1">
            <img src={eagle} alt="" />
          </div>
          <div className="block-2">
            <img src={kajaria} alt="" />
          </div>
          <div className="block-3">
            <img src={oasis} alt="" />
          </div>
          <div className="block-4">
            <img src={roxo} alt="" />
          </div>
          <div className="block-5">
            <img src={watertech} alt="" />
          </div>
          <div className="block-6">
            <img src={asianpaints} alt="" />
          </div>
          <div className="block-7">
            <img src={utkarsh} alt="" />
          </div>
          <div className="block-8">See More...</div>
        </div>
      </div>
      </div>
  );
};

export default BrandContainer;
