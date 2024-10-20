import React from "react";
import RatingStar from "../../Components/RatingStar/RatingStar";
import { useNavigate } from "react-router-dom";


const Products = ({
  width = 52,
  id = 1,
  image = "",
  title = "Unknown",
  price = false,
  rating = false,
}) => {
  const navigate = useNavigate();
  return (
    <div data-aos="fade-in"
      key={id} 
      className={`min-w-${width} max-w-${width} bg-white p-5 shadow-sm shadow-pink-400 rounded-2xl cursor-pointer sm:hover:bg-gray-100`}
      onClick={() => {
        navigate("/product-details/" + id);
        window.scrollTo(0, 0);
      }}
    >
      <div className="h-36">
        <img
          src={image}
          alt=""
          className="max-w-full max-h-full m-auto object-contain rounded-md "
        />
      </div>
      <h1 className="text-sm py-2 text-start h-12 overflow-hidden">{title}</h1>
      <p className="my-2 font-bold">
        {price
          ? price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : "Unavailable"}
      </p>
      {rating && (
        <div className="flex gap-2 items-end">
          <RatingStar rating={rating.rate} />{" "}
          <p
            style={{ fontSize: "8px", transform: "translateY(3px)" }}
            className="opacity-30"
          >
            {rating.count}
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
