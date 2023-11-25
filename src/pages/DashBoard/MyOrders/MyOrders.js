import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./MyOrder.css";

const MyOrders = () => {
  const { user } = useAuth();

  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    fetch(`https://car-shop-backend-site.vercel.app/orders?email=${user.email}`)
      .then((req) => req.json())
      .then((data) => setMyOrder(data));
  }, [user.email]);

  const handleOrderDelteId = (id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://car-shop-backend-site.vercel.app/orders/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("deleted successfully");
            const remainigOrder = myOrder?.filter((order) => order._id !== id);
            setMyOrder(remainigOrder);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-success fw-bold w-25 border border-primary d-block mx-auto mt-3 mb-3  bg-dark text-center">
        My Order
      </h1>
      <div className="table-responsive-sm table-container">
        <table className=" table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Product Name</th>
              <th scope="col">Address</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Delelte Option</th>
            </tr>
          </thead>
          {myOrder?.map((order) => (
            <tbody>
              <tr>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.product_name}</td>
                <td>{order?.address}</td>
                <td>{order?.phonenumber}</td>
                <td>
                  <button
                    onClick={() => handleOrderDelteId(order?._id)}
                    className="btn btn-danger btn-size"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
