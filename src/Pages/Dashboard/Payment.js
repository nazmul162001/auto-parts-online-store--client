import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;

  const { data: order, isLoading } = useQuery(['order', id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-gray-500 text-3xl my-3 font-bold">
            Hello,{' '}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span class="relative text-white"> {order.name} </span>
            </span>
          </p>
          <h2 class="card-title">Pay for: {order.productName} </h2>
          <p className="italic text-success text-xl font-bold">
            Your Order will be plached soon
          </p>
          <p>Please Pay: ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;
