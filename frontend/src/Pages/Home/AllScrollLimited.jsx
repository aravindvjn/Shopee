import React from "react";
import LimitProduct from "./LimitProduct";
import ScrollProductsSkelton from "./ScrollProductsSkelton";
import Fetching from "../../Components/FetchingComponent/Fetching";


const AllScrollLimited = ({ categories }) => {
  return (
    <div>
      {categories.length > 0
        ? categories.map((category, index) => (
            <LimitProduct key={index} category={category} />
          ))
        : <>
        <Fetching class1="h-5 rounded-md my-2 mx-5 w-1/3" />
        <ScrollProductsSkelton /></> }
    </div>
  );
};

export default AllScrollLimited;
