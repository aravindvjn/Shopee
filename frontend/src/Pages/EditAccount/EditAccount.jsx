import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import Header from "../ProductDetails/Header";

const EditAccount = () => {
  const navigate = useNavigate();
  const [editPassword, setEditPassword] = useState(false);
  return (
    <div className="text-center pt-16  bg-pink-50 min-h-screen">
      <Header text={"Edit Your Account"} />
      {editPassword && <ChangePassword setEditPassword={setEditPassword} />}
      <button
        className="border border-pink-600 rounded-lg px-4 py-2"
        onClick={() => {
          setEditPassword(true);
        }}
      >
        Change Password
      </button>
    </div>
  );
};

export default EditAccount;
