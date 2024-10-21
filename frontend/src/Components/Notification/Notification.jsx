import React from "react";
import "./Notification.css";
const Notification = ({ setNotification, notification = "" }) => {
  setTimeout(() => {
    setNotification("");
  }, 3000);
  return (
    <div className="bg-yellow-400 text-sm notification fixed text-center  shadow-inner shadow-yellow-500 z-20 flex p-2 rounded-lg justify-center left-1/2 -translate-x-1/2 items-center">
      {notification}
    </div>
  );
};

export default Notification;
