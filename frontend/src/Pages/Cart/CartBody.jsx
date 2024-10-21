import React, { useEffect, useState } from "react";
import { authURL } from "../../Global/Links";
import CartItems from "./CartItems";

const CartBody = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(authURL + "cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setCartItems(data);
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        console.error("Error in fetching cart data", err);
      }
    };
    fetchCartData();
  }, []);
  return (
    <div className="py-16">
      {cartItems.length > 0 &&
        cartItems.map((item) => {
          return <CartItems key={item.cart_id} {...item} />;
        })}
      {message && <h1 className="text-center">{message}</h1>}
    </div>
  );
};

export default CartBody;
