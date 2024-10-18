import React, { useEffect, useState } from "react";
import { apiURL } from "../../Global/Links";

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
      <div className="flex my-2 py-2 gap-2 overflow-x-scroll scrollbar px-5">
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <button
                key={index}
                className="capitalize px-5 py-2 border rounded-full shadow-pink-400 whitespace-nowrap shadow-sm bg-white"
              >
                {category}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default Category;
