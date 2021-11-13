import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://rocky-dusk-24163.herokuapp.com/products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);
  return (
    <div className="shadow-none p-3 mb-5 bg-dark rounded" id="products">
      <h1 className="text-light fw-bold text-center">OUR CARS</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4 container-set ">
        {products.slice(0, 6).map((singleProduct) => (
          <SingleProduct
            key={singleProduct.key}
            singleProduct={singleProduct}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
