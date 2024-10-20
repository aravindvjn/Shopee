import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const UserProfile = ({ name, email }) => {
  return (
    <div className="">
      <Names text={"Name"} value={name} />
      <Names text={"Email"} value={email} />
    </div>
  );
};

const Names = ({ text, value }) => {
  return (
    <div>
      <p>{text}</p>
      <p className="shadow-sm rounded-md border border-pink-400 shadow-pink-400 min-w-1/2  p-2">
        {value}
      </p>
    </div>
  );
};

export default UserProfile;
