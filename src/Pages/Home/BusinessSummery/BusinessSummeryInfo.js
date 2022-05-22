import React from 'react';

const BusinessSummeryInfo = ({clients, cardTitle, cardCount}) => {
  return (
    <div class="card bg-base-100 shadow-2xl text-center border-[1px] border-primary">
      <figure>
        <img
          className='w-24'
          src={clients}
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 className='text-2xl font-bold'>{cardTitle} </h2>
        <p className='text-3xl font-bold text-primary'>{cardCount} </p>
      </div>
    </div>
  );
};

export default BusinessSummeryInfo;