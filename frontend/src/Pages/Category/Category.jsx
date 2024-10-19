import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../Global/Links";
import Products from "../Home/Products";
import HeaderScroll from "./HeaderScroll";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        fetch(apiURL + `category/${category}`)
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (err) {
        console.log("error in fetching Products by catgory");
      }
    };
    fetchProductsByCategory();
  }, [category]);
  return (
    <>
      <HeaderScroll />
      <div className="grid grid-cols-2 gap-5 bg-pink-50 p-5 pt-16 sm:p-10 lg:p-16 sm:pt-20 lg:pt-24 sm:grid-cols-3 pb-24 min-h-screen">
        {products.length > 0 &&
          products.map((product) => {
            return <Products key={product.id} {...product} width={"full"} />;
          })}
      </div>
    </>
  );
};

export default Category;