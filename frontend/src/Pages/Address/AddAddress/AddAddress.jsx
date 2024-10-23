import React, { useContext, useState } from "react";
import Header from "../../ProductDetails/Header";
import AddressForm from "./AddressForm";

const AddAddress = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-5 sm:p-10 pt-16 pb-24 mb-5 ">
      <Header text={"Add Address"} />
      <AddressForm method={"POST"} />
    </div>
  );
};

export default AddAddress;
