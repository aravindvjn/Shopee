import React, { useEffect, useState } from "react";
import { apiURL } from "../../Global/Links";
import Products from "../Home/Products";

import QtyUpdate from "./QtyUpdate";
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
      <Products {...product} />
      <QtyUpdate {...props} />
    </div>
  );
};

export default CartItems;
