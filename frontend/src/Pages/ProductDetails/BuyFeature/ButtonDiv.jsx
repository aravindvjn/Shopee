import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { authURL } from "../../../Global/Links";
import PopUpWarning from "../../../Components/Warnings/PopUpWarning";
import { UserContext } from "../../../Global/UserContext";
const ButtonDiv = ({ id }) => {
  const { user, setNotification } = useContext(UserContext);
  const [isCartItem, setIsCartItem] = useState(null);
  const token = localStorage.getItem("token");

  const buyHandler = () => {
    if (!user) {
      setNotification("You have to login first.");
      return;
    }
    setNotification("Buy feature will come soon.");
  };

  const updateCart = async (action) => {
    if (!user) {
      setNotification("You have to login to add cart.");
      return;
    }
    const method = action === "Add to Cart" ? "POST" : "DELETE";
    try {
      setIsCartItem(action === "Add to Cart" ? true : false);
      const response = await fetch(authURL + "cart", {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: id }),
      });
      const data = await response.json();
      if (response.ok) {
        setNotification(data.message);
      } else {
        setNotification(data.message);
        setIsCartItem(action === "Add to Cart" ? false : true);
      }
    } catch (err) {
      setIsCartItem(action === "Add to Cart" ? false : true);
      setNotification("Server not responding");
    }
  };
  useEffect(() => {
    const checkCartItem = async () => {
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
          setIsCartItem(() => {
            return data.find((item) => {
              return item.product_id == id;
            });
          });
        } else {
          setIsCartItem(false);
        }
      } catch (err) {
        setNotification("Server not responding.");
      }
    };
    if (user) {
      checkCartItem();
    }
  }, []);
  return (
    <div className="mb-5">
      <Button text="Buy" click={buyHandler} />
      {isCartItem !== null || !user ? (
        isCartItem ? (
          <Button text="Remove from Cart" click={updateCart} />
        ) : (
          <Button text="Add to Cart" click={updateCart} />
        )
      ) : (
        <Button text="Loading.." />
      )}
    </div>
  );
};

export default ButtonDiv;
