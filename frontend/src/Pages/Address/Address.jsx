import React from "react";
import Header from "../ProductDetails/Header";
import AddressBody from "./AddressBody";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
const Address = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-pink-50 min-h-screen p-5 sm:p-10 pt-16">
      <Header text={"Addresses"} />
      <div className="flex gap-2 ">
        <h1 className="font-bold">Saved Addresses</h1>
        <AddCircleOutlineIcon
          className="cursor-pointer"
          onClick={() => {
            navigate("/add-address");
          }}
        />
      </div>
      <AddressBody />
    </div>
  );
};

export default Address;
