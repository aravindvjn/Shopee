import React from "react";

const PopUpWarning = ({ setPopUp, message }) => {
  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 justify-center z-20 items-center flex-col flex p-10" style={{backdropFilter:'blur(2px)'}}>
      <div className="rounded-lg text-center bg-white p-10 shadow-sm shadow-pink-600">
        <h1>{message}</h1>
        <button
          className="bg-pink-600 px-3 py-1 mt-3 text-white font-bold rounded-md"
          onClick={() => setPopUp("")}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUpWarning;
