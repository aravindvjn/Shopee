import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Global/UserContext";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        localStorage.clear();
        navigate("/");
        setUser(null);
        window.scrollTo(0, 0);
      }}
      className="text-white bg-red-600 rounded-md py-1  px-3"
    >
      Logout
    </button>
  );
};

export default Logout;
