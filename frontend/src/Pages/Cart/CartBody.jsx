import React, { useContext, useEffect, useState } from "react";
import { authURL } from "../../Global/Links";
import CartItems from "./CartItems";
import { UserContext } from "../../Global/UserContext";

const CartBody = () => {
  const {notification} = useContext(UserContext)
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
        if (response.status === 200) {
          setCartItems(data);
        } else if (response.status === 201) {
          setMessage(data.message);
          setCartItems("");
        }
      } catch (err) {
        console.error("Error in fetching cart data", err);
      }
    };
    fetchCartData();
  }, [notification]);
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
