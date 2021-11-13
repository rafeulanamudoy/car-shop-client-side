import React from "react";
import "./Partners.css";

import partner1 from "../../../images/Partners/1.jpg";
import partner2 from "../../../images/Partners/2.jpg";

import partner3 from "../../../images/Partners/3.jpg";
import partner4 from "../../../images/Partners/4.jpg";

import partner6 from "../../../images/Partners/6.jpg";

const Partners = () => {
  return (
    <div>
      <h1 className="text-center fw-bold text-info">Our Partners</h1>
      <div className="partner-container  text-center">
        <img className="img-fluid  img-thumbnail " src={partner1} alt="" />
        <img className="img-fluid img-thumbnail " src={partner3} alt="" />
        <img className="img-fluid  img-thumbnail" src={partner2} alt="" />
        <img className="img-fluid  img-thumbnail" src={partner4} alt="" />

        <img className="img-fluid  img-thumbnail" src={partner6} alt="" />
      </div>
    </div>
  );
};

export default Partners;
