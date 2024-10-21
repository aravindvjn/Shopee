import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HouseIcon from "@mui/icons-material/House";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
const AccountSection = ({ id }) => {
  const className =
    "px-2 py-3 border font-semibold rounded-full flex justify-center items-center border-pink-400 bg-pink-600 text-white gap-2";
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-5 mb-5">
      <button className={className} onClick={() => navigate("/cart")}>
        <ShoppingCartIcon />
        <p>Cart</p>
      </button>
      <button className={className}>
        <Inventory2Icon onClick={() => navigate("/orders")} />
        <p>Orders</p>
      </button>
      <button className={className}>
        <HouseIcon onClick={() => navigate("/address")} />
        <p>Address</p>
      </button>
      <button className={className}>
        <EditIcon onClick={() => navigate("/edit-profile")} />
        <p>Edit</p>
      </button>
    </div>
  );
};

export default AccountSection;
