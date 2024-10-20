import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";
import PopUpWarning from "../../Components/Warnings/PopUpWarning";
import LoadingBar from "../../Components/LoadingBar/LoadingBar";

const Auth = () => {
  const location = useLocation();
  const [loading,setLoading]= useState(false)
  const pathname = location.pathname.replace(/\//g, "");
  const [message,setMessage] = useState()
  return (
    <div data-aos="zoom-out">
      {loading && <LoadingBar />}
      {message && <PopUpWarning message={message} setPopUp={setMessage} />}
      <Form page={pathname} setMessage={setMessage}  setLoading={setLoading}/>
    </div>
  );
};

export default Auth;
