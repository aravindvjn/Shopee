import React from "react";
import "./Fetching.css";
const Fetching = ({ class1 = '' }) => {
  return <div data-aos="flip-left"  className={`skeleton ${class1 ? class1 : ""}`}></div>;
};

export default Fetching;
