import React from "react";
import LimitProduct from "./LimitProduct";

const AllScrollLimited = ({ categories }) => {
  return (
    <div>
      {categories.length > 0 &&
        categories.map((category,index) => <LimitProduct key={index} category={category} />)}
    </div>
  );
};

export default AllScrollLimited;
