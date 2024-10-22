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
    <div className="sm:w-2/3 lg:w-1/3 pb-3 sm:pb-5">
      <p className="shadow-sm rounded-md border border-pink-400 min-w-1/2 mt-3 p-2">
        <em>{text} : </em> <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
};

export default UserProfile;
