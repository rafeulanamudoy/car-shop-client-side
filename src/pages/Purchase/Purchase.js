import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "./Purchase.css";
import Navigation from "../shared/Navigation/Navigation";
import axios from "axios";

const Purchase = () => {
  const { productName } = useParams();

  const { register, handleSubmit, reset } = useForm();
  // const value = "udoy";
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios.post("https://rocky-dusk-24163.herokuapp.com/orders", data).then((res) => {
      //   console.log(res);
      if (res.data.insertedId) {
        alert("your order has been placed  succesfully");
        reset();
      }
    });
  };
  return (
    <div>
      <Navigation></Navigation>
      <h1 className="text-danger fw-bold text-center">Place Your Order</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          value={user?.displayName || ""}
          readOnly
        />

        <input
          type="email"
          {...register("email")}
          placeholder="email"
          value={user?.email || ""}
          readOnly
          required
        />

        <input
          type="text"
          {...register("product_name")}
          value={productName || ""}
          placeholder="product name"
          required
        />

        <input
          type="tel"
          {...register("phonenumber")}
          placeholder="phoneNumber"
          required
        />
        <textarea
          className="mx-auto float-none d-block"
          {...register("address")}
          placeholder="Address"
          required
        />

        <input
          type="submit"
          className="text-center mx-auto d-block w-25 mb-3 mt-3"
        />
      </form>
    </div>
  );
};

export default Purchase;
