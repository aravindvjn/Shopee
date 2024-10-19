import React from "react";
import RatingStar from "../../Components/RatingStar/RatingStar";
import ButtonDiv from "./BuyFeature/ButtonDiv";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const ProductBody = ({
  id = 1,
  title = "Unknown",
  price = false,
  description = "No Descriptions",
  category = "Unknown",
  image = "",
  rating = 0,
}) => {
  return (
    <>
      <div data-aos="zoom-out" className="p-5 pt-16 sm:p-10 lg:p-16 sm:pt-20 lg:pt-24">
        <div className="p-10 bg-white rounded-lg shadow-sm shadow-pink-200 max-w-100 sm:w-2/3 lg:w-1/3 m-auto sm:rounded-2xl flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className=" max-w-full object-contain max-h-44 sm:max-h-64 lg:max-h-80"
          />
        </div>
        <div className="pt-5">
          <h1 className="font-bold">{title}</h1>
          <div className="flex justify-between items-center pt-2">
            <div className="flex gap-2 items-end">
              <RatingStar rating={rating.rate} />
              <p
                style={{ fontSize: "12px", transform: "translateY(3px)" }}
                className="opacity-30"
              >
                {rating.count}
              </p>
            </div>
            <p
              style={{ transform: "translateY(3px)" }}
              className="capitalize italic pr-2 opacity-70"
            >
              {category}
            </p>
          </div>
          <p className="my-2 font-bold text-lg mb-2">
            {price
              ? price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : "Not Available"}
          </p>
          <ButtonDiv id={id} />
        </div>
        <div>
          <h1 className="font-bold">About the product : </h1>
          <p className="text-sm sm:text-base text-justify">{description}</p>
        </div>
      </div>
      <RelatedProducts category={category} />
    </>
  );
};

export default ProductBody;
