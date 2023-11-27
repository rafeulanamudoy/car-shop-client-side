import React, { useState, useEffect } from "react";
import Navigation from "../shared/Navigation/Navigation";
import "./Explore.css";
import SingleExplore from "./singleExplore/SingleExplore";

const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://car-shop-backend-side-production.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <div className="explore-container">
        <h2 className="text-center py-5 fw-bold text-white text-uppercase">
          All Cars
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto pb-5 container-set ">
          {allProducts.map((singleExplore) => (
            <SingleExplore
              key={singleExplore?._id}
              singleExplore={singleExplore}
            ></SingleExplore>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
