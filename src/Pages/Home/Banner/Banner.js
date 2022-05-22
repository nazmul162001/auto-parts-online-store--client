import React from 'react';
import bg from '../../../assets/images/banner-line.png';
import car from '../../../assets/images/car.png';
import './Banner.css';

const Banner = () => {
  return (
    <section className='banner w-full h-screen bg-black grid grid-cols-1 md:grid-cols-2 justify-between items-center overflow-x-hidden'>
      <div className="banner-content-main grid grid-cols-2 items-center">
        <div className="banner-content pl-12">
        <span className='text-white bg-primary rounded-full px-3 py-1'>Buy In Auto Parts</span>
        <h1 className="text-4xl text-white banner-title py-3">Auto Parts Online Store</h1>
        <p className='text-white banner-subTitle pb-5'>Special offer for auto parts for electric cars and hybrid vehicles. To select the spare part you need, use the filter presented above or the advanced filter.</p>
        <button className='btn text-black bg-white px-14 rounded-sm'>Get Start</button>
        </div>
        <div className="banner-bg">
          <img className='h-full w-full ml-[100px]' src={bg} alt="" />
        </div>
      </div>
      <div className="banner-image">
        <img src={car} alt="" />
      </div>
    </section>
  );
};

export default Banner;