import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { apiURL } from "../../Global/Links";
import Header from "./Header";
import ProductBody from "./ProductBody";
import ProductDetailsSkelton from "./ProductDetailsSkelton";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await fetch(apiURL + id)
          .then((res) => res.json())
          .then((json) => setProduct(json));
      } catch (err) {
        console.error("Error in fetching product data");
      }
    };
    fetchProduct();
  }, [id]);
  return (
    <div className="bg-pink-50 min-h-screen pb-14">
      <Header />
      {product ? <ProductBody {...product} /> : <ProductDetailsSkelton />}
    </div>
  );
};

export default ProductDetails;
