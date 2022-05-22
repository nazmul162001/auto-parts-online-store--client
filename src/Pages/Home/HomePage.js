import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import GetQuote from './GetQuote/GetQuote';
import Parts from './Parts/Parts';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <GetQuote />
      <Parts />
      <BusinessSummery />
    </div>
  );
};

export default HomePage;