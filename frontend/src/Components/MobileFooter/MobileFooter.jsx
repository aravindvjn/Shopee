import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 mt-3 border border-t-2 border-opacity-5 flex justify-around items-center text-sm bg-white">
      <div className="flex flex-col justify-around items-center ">
        <HomeIcon /> Home
      </div>
      {/* <div className="flex flex-col justify-around items-center ">
        <SearchIcon />
        Search
      </div> */}
      <div className="flex flex-col justify-around items-center ">
        <CategoryIcon />
        Category
      </div>
      <div className="flex flex-col justify-around items-center ">
        <ShoppingCartIcon />
        Cart
      </div>
      <div className="flex flex-col justify-around items-center ">
        <AccountCircleIcon />
        Account
      </div>
    </div>
  );
};

export default MobileFooter;
