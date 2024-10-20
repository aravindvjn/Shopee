import React from "react";
import "./Fetching.css";
const Fetching = ({ class1 = '' }) => {
  return <div  className={`skeleton ${class1 ? class1 : ""}`}></div>;
};

export default Fetching;
