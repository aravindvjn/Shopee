import React from "react";

const Input = ({
  placeholder = "",
  type = "text",
  name = "",
  onChangeHandler,
  input,
}) => {
  return (
    <>
      <label htmlFor={name}>{placeholder}</label>
      <input value={input[name]}
        onChange={onChangeHandler}
        className="focus:outline-none focus:border-pink-500  mb-4 rounded-lg shadow-sm border px-3 py-2 "
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

export default Input;
