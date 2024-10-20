import React from "react";
import Fetching from "../../Components/FetchingComponent/Fetching";
const ScrollProductsSkelton = () => {
  return (
    <div  className="flex overflow-x-scroll gap-5 p-3 px-5 scrollbar">
      {Array(5)
        .fill()
        .map((_, index) => {
          return (
            <Fetching
              class1="min-w-52 w-52 h-72 shadow-sm shadow-pink-400 rounded-2xl cursor-pointer"
              key={index}
            />
          );
        })}
    </div>
  );
};

export default ScrollProductsSkelton;
