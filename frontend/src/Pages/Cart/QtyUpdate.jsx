import React, { useContext, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { authURL } from "../../Global/Links";
import { UserContext } from "../../Global/UserContext";
const QtyUpdate = ({ quantity, cart_id, id }) => {
  const { setNotification } = useContext(UserContext);
  const [qty, setQty] = useState(quantity);
  const token = localStorage.getItem("token");
  const deleteCart = async () => {
    try {
      const response = await fetch(authURL + "cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: id }),
      });
      const data = await response.json();
      if (response.status === 200) {
        setNotification(data.message);
      } else {
        setNotification(data.message);
      }
    } catch (err) {
      setNotification("Server not responding");
    }
  };
  const updateQty = (action) => {
    if (action === "Increment") {
      setQty((prev) => {
        updateQtyInDB(prev + 1);
        return prev + 1;
      });
    } else {
      setQty((prev) => {
        updateQtyInDB(prev - 1);
        return prev - 1;
      });
    }
    const updateQtyInDB = async (newQuantity) => {
      try {
        const response = await fetch(authURL + "cart", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ product_id: id, quantity: newQuantity }),
        });
        const data = await response.json();
        if (response.status.ok) {
          // setNotification(data.message);
        } else {
          setNotification(data.message);
        }
      } catch (err) {
        setNotification("Server not responding");
      }
    };
  };
  return (
    <div className="flex gap-4 bg-pink-700 p-1 px-2 rounded-md absolute bottom-3 right-8 text-white items-center">
      {qty === 1 ? (
        <DeleteIcon
          className="cursor-pointer"
          fontSize="small"
          onClick={deleteCart}
        />
      ) : (
        <RemoveCircleIcon
          className="cursor-pointer"
          fontSize="small"
          onClick={() => updateQty("Decrement")}
        />
      )}
      <h1 className="lg:text-lg font-bold">{qty}</h1>
      <AddCircleIcon
        className="cursor-pointer"
        fontSize="small"
        onClick={() => updateQty("Increment")}
      />
    </div>
  );
};

export default QtyUpdate;
