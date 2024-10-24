import React, { useState } from "react";
import Logo from "../../Components/SmallComponents/Logo";
import Input from "./Input";
import SwitchPage from "./SwitchPage";
import { authURL } from "../../Global/Links";
import { useNavigate } from "react-router-dom";

const Form = ({ page = "Submit", setMessage, setLoading }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
 
    try {
      if (page === "login") {
        if (!input.email || !input.password) {
          setMessage("Invalid Input");
        } else {
          setLoading(true);
          const response = await fetch(authURL + "login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: input.email,
              password: input.password,
            }),
          });

          const data = await response.json();

          if (response.ok) {
            localStorage.setItem("token", data.token);
            navigate("/");
            setLoading(false);
          } else {
            setMessage(data.message);
            setLoading(false);
          }
        }
      } else {
        if (
          !input.email ||
          !input.password ||
          !input.username ||
          !input.cpassword
        ) {
          setMessage("Input field cannot be empty");
        } else if (input.password.length < 8) {
          setMessage("Password must be at least 8 characters long.");
        } else if (input.password !== input.cpassword) {
          setMessage(
            "Passwords do not match. Please make sure both fields are identical."
          );
        } else {
          setLoading(true);
          const response = await fetch(authURL + "register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: input.username,
              email: input.email,
              password: input.password,
            }),
          });

          const data = await response.json();

          if (response.ok) {
            localStorage.setItem("token", data.token);
            navigate("/");
            setLoading(false);
          } else {
            setMessage(data.message);
            setLoading(false);
          }
        }
      }
    } catch (err) {
      console.error("Error in auth");
    }
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col  p-10 min-h-screen justify-center m-auto sm:w-2/3 lg:w-1/3 "
        action=""
      >
        <div className="flex justify-center items-center flex-col mb-3">
          <div className="flex items-end">
            <Logo />
          </div>
          <h1 className="text-pink-600 font-bold">
            {page !== "login" ? "Create an Account" : "Login Here"}
          </h1>
        </div>

        {page !== "login" && (
          <Input
            type="text"
            placeholder="Username"
            name="username"
            onChangeHandler={onChangeHandler}
            input={input}
          />
        )}
        <Input
          input={input}
          type="email"
          placeholder="Email"
          name="email"
          onChangeHandler={onChangeHandler}
        />
        <Input
          input={input}
          type="password"
          placeholder="Password"
          name="password"
          onChangeHandler={onChangeHandler}
        />
        {page !== "login" && (
          <Input
            input={input}
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            onChangeHandler={onChangeHandler}
          />
        )}
        <button className="uppercase rounded-lg bg-pink-700 text-white p-2 hover:bg-pink-300 border">
          {page}
        </button>
        <SwitchPage page={page} />
      </form>
    </div>
  );
};

export default Form;
