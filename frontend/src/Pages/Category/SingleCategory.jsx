import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleCategory = ({ cate = "electronics" }) => {
  const navigate = useNavigate();
  const { category } = useParams();
  return (
    <div data-aos="flip-right"
      onClick={() => {
        navigate("/category/" + cate);
        window.scrollTo(0, 0);
      }}
      className={`capitalize whitespace-nowrap shadow-sm shadow-pink-700 text-white border border-y-white px-3 py-1 rounded-lg ${
        cate === decodeURIComponent(category) ? "bg-pink-900" : ""
      }`}
    >
      {cate}
    </div>
  );
};

export default SingleCategory;
