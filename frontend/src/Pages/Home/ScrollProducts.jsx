import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ScrollProducts = ({ products }) => {
  console.log(products);
  return (
    <div className="flex overflow-x-scroll gap-5 p-3 pl-5 scrollbar">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div
              key={product.id}
              className="min-w-52 w-52 bg-white p-5 shadow-sm shadow-pink-400 rounded-2xl cursor-pointer"
            >
              <div className="h-36">
                <img
                  src={product.image}
                  alt=""
                  className="max-w-full max-h-full m-auto object-contain rounded-md "
                />
              </div>
              <h1 className="text-sm py-2 text-start h-12 overflow-hidden">
                {product.title}
              </h1>
              <p className="my-2 font-bold">
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
          );
        })}
      {products.length > 4 && (
        <div className="min-w-48 p-5 h-58 shadow-md rounded-3xl bg-white flex justify-center items-center flex-col text-center">
          <ArrowForwardIcon fontSize="large" />
          <p>More</p>
        </div>
      )}
    </div>
  );
};

export default ScrollProducts;
