import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L1PV2GTjQFJmthfZb1lh0BvUivcqdcBSncRDHe4E0xVhweALHl42jEK8J8b7wEsUvUQ32eCPfaeUe7oAUuy832i00CuXFquFK'
);

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
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-gray-500 text-3xl my-3 font-bold">
            Hello,{' '}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span className="relative text-white"> {order.name} </span>
            </span>
          </p>
          <h2 className="card-title">Pay for: {order.productName} </h2>
          <p className="italic text-success text-xl font-bold">
            Your Order will be plached soon
          </p>
          <p>Please Pay: ${order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
