import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { authURL } from "../../Global/Links";
import { useContext } from "react";
import { UserContext } from "../../Global/UserContext";
const SingleAddress = ({
  address_id = "",
  city = "Unavailable",
  country = "Unavailable",
  created_at = "Unavailable",
  delivery_instructions = "No Instructions.",
  phone_number = "Unavailable",
  postal_code = "Unavailable",
  recipient_name = "Unavailable",
  state = "Unavailable",
  street_address = "Unavailable",
}) => {
  const { setNotification } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const deleteAddress = async () => {
    try {
      const response = await fetch(authURL + "addresses", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ address_id: address_id }),
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
  return (
    <div
      data-aos="fade-in"
      className="border border-pink-700 p-5 rounded-md mt-2 bg-white relative"
    >
      <div className="absolute right-4 top-4">
        <EditIcon />
        <DeleteIcon onClick={deleteAddress} />
      </div>
      <h1 className="font-bold">{recipient_name}</h1>
      <p>
        {street_address} , {city}
      </p>
      <p>{state}</p>
      <p>{country}</p>
      <p>{delivery_instructions}</p>
      <p>{postal_code}</p>
      <p>{phone_number}</p>
    </div>
  );
};

export default SingleAddress;
