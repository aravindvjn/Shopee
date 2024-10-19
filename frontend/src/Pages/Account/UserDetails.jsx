import React from "react";
import Logout from "./Logout";

const UserDetails = ({ id = 0, name = "Unknown", email = "Unavailable" }) => {
  return (
    <div>
      <h1 className="">Hai, {name}</h1>
      <h1 className="">E-mail : {email}</h1>
      <Logout />
    </div>
  );
};

export default UserDetails;
