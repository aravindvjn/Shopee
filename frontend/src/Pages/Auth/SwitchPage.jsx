import React from "react";
import { useNavigate } from "react-router-dom";

const SwitchPage = ({ page = "login" }) => {
  const navigate = useNavigate();
  const switchPage = () => {
    if (page === "login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="text-center">
      <p>
        {page === "login"
          ? "Don't have an account? "
          : "Already have an account ? "}
        <strong className="cursor-pointer" onClick={switchPage}>
          {page === "login" ? "Sign Up" : "Log In"}
        </strong>
      </p>
    </div>
  );
};

export default SwitchPage;
