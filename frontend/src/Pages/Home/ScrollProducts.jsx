import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

const ScrollProducts = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div className="flex overflow-x-scroll gap-5 p-3 px-5 scrollbar">
      {products.length > 0 &&
        products.map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      {products.length > 4 && (
        <div
          className="min-w-48 p-5 h-58 shadow-sm rounded-2xl cursor-pointer shadow-pink-400 bg-white flex justify-center items-center flex-col text-center"
          onClick={() => {
            navigate("/category/" + products[0].category);
          }}
        >
          <ArrowForwardIcon fontSize="large" />
          <p>More</p>
        </div>
      )}
    </div>
  );
};

export default ScrollProducts;
