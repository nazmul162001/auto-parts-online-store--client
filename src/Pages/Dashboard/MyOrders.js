import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-3xl text-primary">My all orders {orders.length} </h2>
      <div class="overflow-x-scroll">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order Name</th>
              <th>Quantity</th>
              <th>Phone NO:</th>
              <th>Address</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th> {index + 1} </th>
                <td>{order.productName}</td>
                <td>{order.quantity} </td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  <button className="btn btn-xs btn-secondary px-5 text-sm">
                    Pay
                  </button>{' '}
                </td>
                <td>
                  <button className="btn btn-xs btn-error">Delete</button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
