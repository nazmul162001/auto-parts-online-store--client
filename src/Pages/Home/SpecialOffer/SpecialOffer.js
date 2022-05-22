import React from 'react';
import SpecialOfferSlider from './SpecialOfferSlider';

const SpecialOffer = () => {
  return (
    <section className="special-offer">
      <div className="title text-center mb-5">
        <span className="text-sm text-white bg-primary px-3 py-1 rounded-full">
          Buy Profitably
        </span>
      </div>
      <h2 className="text-center text-primary text-5xl font-bold uppercase opacity-60">
        Special Offer
      </h2>
      <div className="w-60 h-1 bg-primary mx-auto my-3"></div>
      <p className="text-gray-500 text-center mb-12">
        In this section, we have collected the most popular <br /> and advantageous
        offers for you.
      </p>
      <SpecialOfferSlider />
    </section>
  );
};

export default SpecialOffer;
