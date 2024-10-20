import React from "react";
import Logout from "./Logout";

import UserProfile from "./UserProfile";
import AccountSection from "./AccountSection";
const UserDetails = ({
  id = 0,
  name = "Unknown",
  email = "Unavailable",
  created_at = "",
}) => {
  return (
    <div>
      <UserProfile name={name} email={email} />
      <h1 className="mb-3">
        Joined on{" "}
        {new Date(created_at).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h1>
      <AccountSection id={id} />
      <div className="text-center">
        <Logout />
      </div>
    </div>
  );
};

export default UserDetails;
