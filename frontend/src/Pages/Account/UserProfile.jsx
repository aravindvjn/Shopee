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
      <p className="shadow-sm rounded-md border border-pink-400 min-w-1/2 mt-3 p-2">
        <em>{text} : </em> <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
};

export default UserProfile;
