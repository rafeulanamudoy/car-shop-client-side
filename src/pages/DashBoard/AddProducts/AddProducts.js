import React from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://rocky-dusk-24163.herokuapp.com/products", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("product add succesfully");
          reset();
        }
      });
  };
  return (
    <div className=" ">
      <h1 className="text-danger fw-bold text-center ">Add Products</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form-style">
        <input
          type="text"
          {...register("productName")}
          placeholder="product name"
        />
        <textarea
          className="mx-auto float-none d-block"
          {...register("desc")}
          placeholder="description"
        />
        <input type="text" {...register("img")} placeholder="Image Url" />
        <input type="text" {...register("price")} placeholder="price" />
        <input
          type="submit"
          className="text-center mx-auto d-block w-25 mb-3 mt-3"
        />
      </form>
    </div>
  );
};

export default AddProducts;
