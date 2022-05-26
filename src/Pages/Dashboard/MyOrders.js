import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import MyOrderInfo from './MyOrderInfo';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://boiling-ridge-27693.herokuapp.com/order?email=${user.email}`,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
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
  }, [user, navigate, orders]);

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
              <MyOrderInfo order={order} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
