import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ManageSingleOrder from "./ManageSingleOrder";

const ManageOrders = () => {
  const [manages, setManages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/manage")
      .then((res) => res.json())
      .then((data) => setManages(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-gray-500">Manage all orders</h2>
      <div className="manage-order">
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {manages.map((manage, index) => (
                <ManageSingleOrder key={index} manage={manage} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
