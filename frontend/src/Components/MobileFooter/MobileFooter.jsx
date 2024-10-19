import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
const MobileFooter = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  return (
    <div  className="fixed bottom-0 left-0 right-0 h-16 mt-3 border border-t-2 border-opacity-5 flex justify-around items-center text-sm bg-white">
      <div
        className="flex flex-col justify-around items-center cursor-pointer"
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      >
        <HomeIcon className={`${pathname === "/" ? "opacity-60" : ""}`} />
        Home
      </div>
      {/* <div className="flex flex-col justify-around items-center ">
        <SearchIcon />
        Search
      </div> */}
      <div
        className="flex flex-col justify-around items-center cursor-pointer"
        onClick={() => {
          navigate("/category/" + "electronics");
          window.scrollTo(0, 0);
        }}
      >
        <CategoryIcon
          className={`${
            pathname.split("/")[1] === "category" ? "opacity-60" : ""
          }`}
        />
        Category
      </div>
      <div className="flex flex-col justify-around items-center cursor-pointer">
        <ShoppingCartIcon />
        Cart
      </div>
      <div className="flex flex-col justify-around items-center cursor-pointer" onClick={()=>{
        navigate("/account");
        window.scrollTo(0,0)
      }} >
        <AccountCircleIcon className={`${pathname === "/account" ? "opacity-60" : ""}`} />
        Account
      </div>
    </div>
  );
};

export default MobileFooter;
