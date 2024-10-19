import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <form data-aos="zoom-out" action="" className=" mx-5 relative">
      <input
        type="text"
        className="border border-gray-300 w-full p-2.5 pl-4 rounded-full"
        placeholder="Search..."
      />
        <SearchIcon fontSize="large" className="absolute right-3 top-1.5 text-gray-400"/>
    </form>
  );
};

export default Search;
