import React, { useEffect, useState } from "react";
import { apiURL } from "../../../Global/Links";
import RatingStar from "../../../Components/RatingStar/RatingStar";
import { useNavigate } from "react-router-dom";
import LimitProduct from "../../Home/LimitProduct";

const RelatedProducts = ({ category }) => {
    const navigate = useNavigate()
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    const fetchByCategory = async () => {
      try {
        const res = await fetch(apiURL + `category/${category}?limit=5`);
        if (res.ok) {
          const data = await res.json();
          setRelatedProducts(data);
        } else {
          console.log("Failed to fetch all category");
        }
      } catch (err) {
        console.error("Error in fetching all categories");
      }
    };
    fetchByCategory();
  }, []);
  return (
<div>
    {category && <LimitProduct newName={"Related Products"} category={category} />}
</div>
  );
};

export default RelatedProducts;
