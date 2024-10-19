import React, { useEffect, useState } from "react";
import { apiURL } from "../../Global/Links";
import Fetching from "../../Components/FetchingComponent/Fetching";

const Category = ({ categories, setCategories }) => {
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(apiURL + "categories");
        if (res.ok) {
          const data = await res.json();
          setCategories(data);
        } else {
          console.log("Failed to fetch all category");
        }
      } catch (err) {
        console.error("Error in fetching all categories");
      }
    };
    fetchCategory();
  }, []);
  return (
    <>
      <h1 className="mt-4 pl-5 mb-0 font-bold">Categories</h1>
      <div className="flex my-2 py-2 gap-2 overflow-x-scroll scrollbar pl-3">
        {categories.length > 0 ?
          categories.map((category, index) => {
            return (
              <button
                key={index}
                className="capitalize px-5 py-2 border rounded-full shadow-pink-400 whitespace-nowrap shadow-sm h-11 bg-white"
              >
                {category}
              </button>
            );
          }) : Array(4).fill().map((_,index)=>{
            return <Fetching class1="capitalize h-11 border rounded-full shadow-pink-400 min-w-32 whitespace-nowrap shadow-sm" key={index} />
          })}
      </div>
    </>
  );
};

export default Category;
