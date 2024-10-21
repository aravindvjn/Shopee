import React, { useEffect, useState } from "react";
import { apiURL } from "../../Global/Links";
import Products from "../Home/Products";

import QtyUpdate from "./QtyUpdate";
import Fetching from "../../Components/FetchingComponent/Fetching";
const CartItems = (props) => {
  const { product_id, quantity, cart_id } = props;
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await fetch(apiURL + product_id)
          .then((res) => res.json())
          .then((json) => setProduct(json));
      } catch (err) {
        console.error("Error in fetching product data");
      }
    };
    fetchProduct();
  }, [product_id]);
  return (
    <div className="px-5 relative mb-4">
      {product ? (
        <>
          <Products {...product} />
          <QtyUpdate {...props} id={product.id} />
        </>
      ) : (
        <Fetching class1=" h-72 shadow-sm shadow-pink-400 rounded-2xl cursor-pointer" />
      )}
    </div>
  );
};

export default CartItems;
