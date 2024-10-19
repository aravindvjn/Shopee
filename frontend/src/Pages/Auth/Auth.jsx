import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";
import PopUpWarning from "../../Components/Warnings/PopUpWarning";

const Auth = () => {
  const location = useLocation();
  const pathname = location.pathname.replace(/\//g, "");
  const [message,setMessage] = useState()
  return (
    <div data-aos="zoom-out">
      {message && <PopUpWarning message={message} setPopUp={setMessage} />}
      <Form page={pathname} setMessage={setMessage} />
    </div>
  );
};

export default Auth;
