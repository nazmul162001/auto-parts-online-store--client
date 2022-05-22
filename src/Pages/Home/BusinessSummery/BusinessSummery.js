import React from 'react';
import clients from '../../../assets/images/happyclients.svg';
import BusinessSummeryInfo from './BusinessSummeryInfo';

const BusinessSummery = () => {
  return (
    <div className="business-info mt-12">
      <h2 className="text-center text-5xl text-primary opacity-60 font-bold">MILLIONS BUSINESS TRUST US</h2>
      <h3 className='text-center text-xl text-gray-500 font-bold py-3 '>TRY TO UNDERSTAND USERS EXPECTATION</h3>
      <div className='h-1 bg-primary w-48 mx-auto opacity-60'></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center px-12 my-12 gap-3">
        <BusinessSummeryInfo
          cardTitle="Office In Country"
          cardCount="27+"
          clients={clients}
        />
        <BusinessSummeryInfo
          cardTitle="Our Team"
          cardCount="145+"
          clients={clients}
        />
        <BusinessSummeryInfo
          cardTitle="Product In Store"
          cardCount="95200+"
          clients={clients}
        />
        <BusinessSummeryInfo
          cardTitle="Distributors"
          cardCount="70+"
          clients={clients}
        />
      </div>
    </div>
  );
};

export default BusinessSummery;
