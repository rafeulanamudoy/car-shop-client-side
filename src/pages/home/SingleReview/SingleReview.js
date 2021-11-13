import { Rating } from "@mui/material";
import React from "react";

const SingleReview = (props) => {
  const { name, review, rating } = props.singleReview;
  return (
    <div className="col">
      <div className="card text-center">
        <h1 className=" text-success">{name}</h1>
        <p>{review}</p>
        <Rating style={{ left: "38%" }} value={parseFloat(rating)} readOnly />
      </div>
    </div>
  );
};

export default SingleReview;
