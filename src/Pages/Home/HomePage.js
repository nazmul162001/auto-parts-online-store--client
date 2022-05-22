import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import GetQuote from './GetQuote/GetQuote';
import OurTeam from './OurTeam/OurTeam';
import Parts from './Parts/Parts';
import Review from './Review/Review';
import SpecialOffer from './SpecialOffer/SpecialOffer';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <GetQuote />
      <Parts />
      <BusinessSummery />
      <Review />
      <SpecialOffer />
      <OurTeam />
    </div>
  );
};

export default HomePage;