import React from "react";
import AddressForm from "./AddressForm";
import Header from "../../ProductDetails/Header";
import { useParams } from "react-router-dom";

const EditAddress = () => {
  const { address_id } = useParams();
  return (
    <div className="bg-pink-50 min-h-screen p-5 sm:p-10 pt-16 pb-24 mb-5 ">
      <Header text={"Edit Address"} />
      <AddressForm method={"PUT"} address_id={address_id} />
    </div>
  );
};

export default EditAddress;
