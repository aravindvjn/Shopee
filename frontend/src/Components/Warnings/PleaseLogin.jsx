import React from "react";
import Button from "../../Pages/ProductDetails/BuyFeature/Button";
import { useNavigate } from "react-router-dom";

const PleaseLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-pink-50">
      <h1>Please Login First</h1>
      <div className="flex"
        onClick={() => {
          navigate("/login");
        }}
      >
        <Button text="Login" />
      </div>
    </div>
  );
};

export default PleaseLogin;
