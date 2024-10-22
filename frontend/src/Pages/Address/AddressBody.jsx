import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Global/UserContext";
import { authURL } from "../../Global/Links";
import SingleAddress from "./SingleAddress";

const AddressBody = () => {
  const [addresses, setAddresses] = useState([]);
  const { setNotification } = useContext(UserContext);
  const [message,setMessage] = useState()
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch(authURL + "addresses", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.status === 200) {
          setAddresses(data);
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        setNotification("Something is Wrong. Please Try again.");
      }
    };
    fetchAddresses();
  }, []);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {addresses.length > 0 ?
        addresses.map((address) => {
          return <SingleAddress key={address.address_id} {...address} />;
        }): <h1 className="text-center mt-5">{message}</h1>}
    </div>
  );
};

export default AddressBody;
