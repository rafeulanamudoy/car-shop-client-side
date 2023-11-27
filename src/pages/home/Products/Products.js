import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://car-shop-backend-side-production.up.railway.app/products"
    ).then((res) => res.json().then((data) => setProducts(data)));
  }, []);
  return (
    <div className="w-75 mx-auto shadow-none p-3 mb-5 rounded" id="products">
      <h1 className="text-light fw-bold text-uppercase text-center  my-5">
        Feautured cars
      </h1>

      <div className="row row-cols-1 row-cols-md-3 g-4 container-set   ">
        {products.slice(0, 6).map((singleProduct) => (
          <SingleProduct
            key={singleProduct?._id}
            singleProduct={singleProduct}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
