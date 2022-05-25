import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => {
          // console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]);

  return (
    <div>
      <h2 className="text-3xl text-primary">My all orders {orders.length} </h2>
      <div className="overflow-x-scroll">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order Name</th>
              <th>Quantity</th>
              <th>Phone NO:</th>
              <th>Address</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th> {index + 1} </th>
                <td>{order.productName}</td>
                <td>{order.quantity} </td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.price}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-secondary px-5 ">
                        Pay
                      </button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p className="text-success text-xl">paid</p>
                      <p className="text-gray-500">
                        <strong>Trx:</strong> {order.transactionId}
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  {order.paid ? (
                    <button disabled className="btn btn-xs btn-error">
                      Delete
                    </button>
                  ) : (
                    <button className="btn btn-xs btn-error">Delete</button>
                  )}
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
