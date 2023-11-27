import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";
const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch("https://car-shop-backend-side-production.up.railway.app/review")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-uppercase text-light my-5">
        User Reviews
      </h1>
      <div className="row row-cols-1 w-75 mx-auto row-cols-md-3 g-4 container-set ">
        {allReviews.map((singleReview) => (
          <SingleReview
            key={singleReview._id}
            singleReview={singleReview}
          ></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
