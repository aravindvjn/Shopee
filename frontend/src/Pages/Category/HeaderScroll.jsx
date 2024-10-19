import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";
import { apiURL } from "../../Global/Links";

const HeaderScroll = () => {
  const [categories, setCategories] = useState([]);
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
    <div className="fixed z-10 right-0 left-0 top-0 h-12 flex items-center p-5 bg-pink-700 overflow-x-scroll scrollbar-none gap-2">
      {categories.length > 0 &&
        categories.map((category,index) => {
          return <SingleCategory key={index} cate={category} />;
        })}
    </div>
  );
};

export default HeaderScroll;
