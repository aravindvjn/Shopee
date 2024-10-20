import React from "react";
import "./LoadingBar.css";
const LoadingBar = () => {
  return (
    <div className="loading-bar-parent fixed right-0 left-0 top-0 bottom-0 z-10">
      <div className="fixed right-0 left-0 top-0 h-1.5">
        <div className="loading-bar bg-pink-700"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
