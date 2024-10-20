import React, { useContext, useEffect, useState } from "react";
import Header from "../ProductDetails/Header";
import { fetchUserData } from "../../Global/GetUser";
import UserDetails from "./UserDetails";
import PleaseLogin from "../../Components/Warnings/PleaseLogin";
import { UserContext } from "../../Global/UserContext";

const Account = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-pink-50 min-h-screen p-5 pt-16">
      <Header text="Your Account" />
      {user ? <UserDetails {...user} /> : <PleaseLogin />}
    </div>
  );
};

export default Account;
