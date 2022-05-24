import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { id } = useParams();
  return (
    <div>
      <he className="text-2xl text-gray-500 text-bold my-3">
        Please Pay For: {id}{' '}
      </he>
    </div>
  );
};

export default Payment;
