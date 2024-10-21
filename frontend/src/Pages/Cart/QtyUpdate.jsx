import React, { useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const QtyUpdate = ({ quantity, cart_id }) => {
  const [qty, setQty] = useState(quantity);
  const deleteCart = async () => {
    console.log("Deleted");
  };
  const updateQty = async (action) => {
    if (action === "Increment") {
      setQty((prev) => prev + 1);
    } else {
      setQty((prev) => prev - 1);
    }
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
