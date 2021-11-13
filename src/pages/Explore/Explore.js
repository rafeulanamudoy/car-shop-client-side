import React, { useState, useEffect } from "react";
import Navigation from "../shared/Navigation/Navigation";
import "./Explore.css";
import SingleExplore from "./singleExplore/SingleExplore";

const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://rocky-dusk-24163.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <h2 className="text-center fw-bold text-danger">Our All Cars</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 container-set ">
        {allProducts.map((singleExplore) => (
          <SingleExplore
            key={singleExplore.key}
            singleExplore={singleExplore}
          ></SingleExplore>
        ))}
      </div>
    </div>
  );
};

export default Explore;
