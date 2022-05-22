import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import GetQuote from './GetQuote/GetQuote';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <GetQuote />
      <BusinessSummery />
    </div>
  );
};

export default HomePage;