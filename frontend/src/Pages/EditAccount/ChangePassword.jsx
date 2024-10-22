import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../Auth/Input";
import PopUpWarning from "../../Components/Warnings/PopUpWarning";
import { UserContext } from "../../Global/UserContext";
import { authURL } from "../../Global/Links";
import { useNavigate } from "react-router-dom";
const ChangePassword = ({ setEditPassword }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const { setNotification } = useContext(UserContext);
  const [input, setInput] = useState({
    oldPassword: "",
    password: "",
    cPassword: "",
  });
  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.password || !input.oldPassword || !input.cPassword) {
      setMessage("Input field cannot be empty");
    } else if (input.password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
    } else if (input.password !== input.cPassword) {
      setMessage(
        "Passwords do not match. Please make sure both fields are identical."
      );
    } else if (input.oldPassword === input.password) {
      setMessage(
        "The new password must be different from the current password."
      );
    } else {
      try {
        const response = await fetch(authURL + "update-password", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            password: input.password,
            oldPassword: input.oldPassword,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          setNotification(data.message);
          navigate("/account");
        } else {
          setNotification(data.message);
        }
      } catch (err) {
        setNotification("Server not responding");
      }
    }
  };
  return (
    <div className="min-h-screen fixed bg-pink-50">
      <div className="flex justify-center items-center text-left w-screen p-10 relative">
        {message && <PopUpWarning message={message} setPopUp={setMessage} />}
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-2 sm:w-2/3 lg:w-1/3">
          <CloseIcon
            onClick={() => setEditPassword(false)}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <Input
            type="password"
            placeholder="Current Password"
            name="oldPassword"
            onChangeHandler={onChangeHandler}
            input={input}
          />
          <Input
            type="password"
            placeholder="New Password"
            name="password"
            onChangeHandler={onChangeHandler}
            input={input}
          />
          <Input
            type="password"
            placeholder="Confirm new Password"
            name="cPassword"
            onChangeHandler={onChangeHandler}
            input={input}
          />
          <button
            type="submit"
            className="uppercase rounded-lg bg-pink-700 text-white p-2 hover:bg-pink-300 border"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
