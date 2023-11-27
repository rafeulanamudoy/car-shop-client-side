import axios from "axios";

import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  // const value = "udoy";

  const onSubmit = (data) => {
    axios
      .post(
        "https://car-shop-backend-side-production.up.railway.app/review",
        data
      )
      .then((res) => {
        //   console.log(res);
        if (res.data.insertedId) {
          alert("your review has been placed  succesfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-danger fw-bold">this is review page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          value={user?.displayName || ""}
          readOnly
        />
        <textarea
          className="mx-auto float-none d-block"
          {...register("review")}
          placeholder="Your Valuable Review"
          required
        />
        <input
          type="text"
          placeholder="give Your rating in number"
          {...register("rating")}
        />

        <input
          type="submit"
          className="text-center mx-auto d-block w-25 mb-3 mt-3"
        />
      </form>
    </div>
  );
};

export default Review;
