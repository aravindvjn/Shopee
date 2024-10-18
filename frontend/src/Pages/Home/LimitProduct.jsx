import React, { useEffect, useState } from "react";
import ScrollProducts from "./ScrollProducts";
import { apiURL } from "../../Global/Links";

const LimitProduct = ({category}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await fetch(
          apiURL + `category/${category}?limit=5`
        )
          .then((res) => res.json())
          .then((json) => setProducts(json));
        console.log(products);
      } catch (err) {
        console.error("Error in fetching limit products");
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        {category && <h1 className="pl-5 font-semibold capitalize">{category}</h1>}
        {products.length > 0 && <ScrollProducts products={products} />}
      </div>
    </>
  );
};

export default LimitProduct;
