import React, { useEffect, useState } from "react";
import Header from "../ProductDetails/Header";
import { fetchUserData } from "../../Global/GetUser";
import UserDetails from "./UserDetails";
import PleaseLogin from "../../Components/Warnings/PleaseLogin";

const Account = () => {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token"); //
  useEffect(() => {
    if (token) {
      fetchUserData(token)
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          console.error("Error in fetching data", err);
        });
    } else {
      console.log("No token found. Please login.");
    }
  }, [token]);
  return (
    <div className="bg-pink-50 min-h-screen p-5 pt-16">
      <Header text="Your Account" />
      {token && user ? <UserDetails {...user} /> : <PleaseLogin />}
    </div>
  );
};

export default Account;
