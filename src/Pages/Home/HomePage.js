import React from 'react';
import Footer from '../Shared/Footer';
import NavbarMini from '../Shared/NavbarMini';
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
      <NavbarMini />
      <Banner />
      <GetQuote />
      <Parts />
      <BusinessSummery />
      <Review />
      <SpecialOffer />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default HomePage;