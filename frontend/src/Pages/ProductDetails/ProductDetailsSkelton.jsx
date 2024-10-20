import React from "react";
import Fetching from "../../Components/FetchingComponent/Fetching";

const ProductDetailsSkelton = () => {
  return (
      <div className="p-5 pt-16 sm:p-10 lg:p-16 sm:pt-20 lg:pt-24">
          <Fetching class1="bg-black shadow-sm  shadow-pink-400 w-full h-64 sm:-h-80 lg:-h-96 rounded-lg max-w-100 sm:w-2/3 lg:w-1/3 m-auto sm:rounded-2xl" />
        <div className="pt-5">
          <Fetching class1="h-5 rounded-md" />
          <div className="flex justify-between items-center py-4">
            <Fetching class1="w-1/3 rounded-md h-5" />
            <Fetching class1="w-1/5 rounded-md  h-5" />
          </div>
          <Fetching class1="w-1/3 h-5 rounded-md mb-1 " />
        </div>
        <div className="flex gap-3 items-center py-2">
            <Fetching class1="w-1/5 shadow-sm shadow-pink-300 rounded-md h-7" />
            <Fetching class1="w-2/5 shadow-sm shadow-pink-300 rounded-md h-7" />
          </div>
        <div className="mt-3" ><Fetching class1="h-5 w-1/2 rounded-md" />
        <Fetching class1="w-full h-44 my-3 rounded-md "/></div>
      </div>
  );
};

export default ProductDetailsSkelton;
