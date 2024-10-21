import React from "react";

const Button = ({ text = "", click = () => {} }) => {
  return (
    <button
      onClick={() => click(text)}
      className="bg-pink-700 py-1 px-5 rounded-md text-white mr-3 hover:shadow-sm hover:shadow-pink-500 hover:bg-pink-600"
    >
      {text}
    </button>
  );
};

export default Button;
