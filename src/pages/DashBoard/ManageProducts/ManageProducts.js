import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://rocky-dusk-24163.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div>
      <h2 className="text-center fw-bold text-danger">Our All Cars</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 container-set ">
        {allProducts.map((singleProduct) => (
          <SingleManageProduct
            key={singleProduct.key}
            singleProduct={singleProduct}
            function={setAllProducts}
            products={allProducts}
          ></SingleManageProduct>
        ))}
      </div>
    </div>
  );
};

const SingleManageProduct = (props) => {
  console.log(props.function, props.products);

  const { productName, img, price, desc, _id } = props.singleProduct;

  const handleProductDelteId = (id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://rocky-dusk-24163.herokuapp.com/products/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("deleted successfully");
            const remainigProducts = props.products?.filter(
              (product) => product._id !== id
            );
            props.function(remainigProducts);
          }
        });
    }
  };

  return (
    <div className="col">
      <div className="card " style={{ height: "500px" }}>
        <img src={img} className="card-img-top img-set" />
        <div className="card-body">
          <h5 className="card-title text-center text-danger ">
            Name:{productName}
          </h5>
          <h6>{desc.slice(0, 150)}</h6>
          <p className="card-text text-center text-primary fw-bold ">
            Price:{price}
          </p>
          <Button
            onClick={() => handleProductDelteId(_id)}
            variant="contained"
            style={{ display: "block", margin: "0 auto" }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
