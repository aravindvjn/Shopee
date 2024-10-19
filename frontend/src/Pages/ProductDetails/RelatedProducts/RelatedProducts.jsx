import React, { useEffect, useState } from "react";
import { apiURL } from "../../../Global/Links";
import RatingStar from "../../../Components/RatingStar/RatingStar";
import { useNavigate } from "react-router-dom";
import LimitProduct from "../../Home/LimitProduct";

const RelatedProducts = ({ category }) => {
  return (
<div>
    {category && <LimitProduct newName={"Related Products"} category={category} />}
</div>
  );
};

export default RelatedProducts;
