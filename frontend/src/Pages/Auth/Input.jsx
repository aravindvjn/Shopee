import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Input = ({
  placeholder = "",
  type = "text",
  name = "",
  onChangeHandler,
  input,
}) => {
  const [theType, setTheType] = useState(type);
  return (
    <>
      <label htmlFor={name}>{placeholder}</label>
      <div className="relative">
        <input
          value={input[name]}
          onChange={onChangeHandler}
          className="focus:outline-none focus:border-pink-500  mb-4 rounded-lg shadow-sm border px-3 py-2 w-full"
          type={theType}
          placeholder={placeholder}
          name={name}
        />
        <div  className="absolute right-4 top-2 cursor-pointer opacity-50" onClick={()=>setTheType(theType === "text"? "password" : "text")}>
        {type == "password" &&
          (theType === "password" ? <VisibilityOffIcon className="opacity-50"/> : <VisibilityIcon />)}
        </div>
      </div>
    </>
  );
};

export default Input;
