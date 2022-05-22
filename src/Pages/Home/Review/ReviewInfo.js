import React from 'react';

const ReviewInfo = ({review}) => {
  const {name, description, price, ratings} = review;

  return (
    <div>
      {name}
    </div>
  );
};

export default ReviewInfo;