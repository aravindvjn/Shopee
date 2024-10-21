import React from "react";
import Header from "../ProductDetails/Header";
import CartBody from "./CartBody";

const Cart = () => {
  return (
    <div className="bg-pink-50 min-h-screen">
      <Header text={"Cart"} />
      <CartBody />
    </div>
  );
};

export default Cart;
