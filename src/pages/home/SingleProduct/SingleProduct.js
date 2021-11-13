import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
const SingleProduct = (props) => {
  const { productName, price, img, desc } = props.singleProduct;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top img-set" />
        <div className="card-body">
          <h5 className="card-title text-center text-danger">
            Name:{productName}
          </h5>
          <h6>{desc.slice(0, 150)}</h6>
          <p className="card-text text-center text-primary fw-bold">
            Price:{price}
          </p>

          <Link
            to={`/purchase/${productName}`}
            className="btn btn-success d-block mx-auto mb-3 fw-bold"
          >
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
