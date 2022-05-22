import React from 'react';
import Login from '../Login/Login';
import Banner from './Banner/Banner';
import GetQuote from './GetQuote/GetQuote';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <GetQuote />
    </div>
  );
};

export default HomePage;