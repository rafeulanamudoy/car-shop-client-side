import React, { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [manageOrder, setManageOrder] = useState([]);

  useEffect(() => {
    fetch("https://car-shop-backend-site.vercel.app/allorders")
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, []);

  const handleDelteId = (id) => {
    // console.log("clicked", id);
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://car-shop-backend-site.vercel.app/allorders/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("deleted successfully");
            const remainigOrder = manageOrder?.filter(
              (order) => order._id !== id
            );
            setManageOrder(remainigOrder);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-success fw-bold w-25 border border-primary d-block mx-auto mt-3 mb-3  bg-dark">
        Manage Order
      </h1>
      <div className="table-responsive-sm table-container">
        <table className=" table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Products</th>
              <th scope="col">Address</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Delelte Option</th>
            </tr>
          </thead>
          {manageOrder?.map((singleManageOrder) => (
            <tbody>
              <tr>
                <td>{singleManageOrder.name}</td>
                <td>{singleManageOrder.email}</td>
                <td>{singleManageOrder.product_name}</td>
                <td>{singleManageOrder.address}</td>
                <td>{singleManageOrder.phonenumber}</td>
                <td>
                  <button
                    onClick={() => handleDelteId(singleManageOrder._id)}
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

export default ManageAllProducts;
