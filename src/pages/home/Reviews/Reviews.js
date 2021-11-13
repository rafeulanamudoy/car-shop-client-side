import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";
const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch("https://rocky-dusk-24163.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-danger dw-bold">User Reviews</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 container-set ">
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
