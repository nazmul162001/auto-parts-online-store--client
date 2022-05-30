import React from 'react';
import bg from '../../../assets/images/banner-line.png';
import car from '../../../assets/images/car.png';
import './Banner.css';
import bgBottom from '../../../assets/images/small-line.svg';

const Banner = () => {
  return (
    <>
      <section className="banner w-full h-screen overflow-hidden bg-black grid grid-cols-1 md:grid-cols-2 justify-between items-center overflow-x-hidden relative">
        <div className="banner-content-main grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="banner-content pl-12 text-center">
            <span
              className="text-white bg-primary rounded-full px-3 py-1 inline-block"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Buy In Auto Parts
            </span>
            <h1
              className="text-4xl text-white banner-title py-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Auto Parts Online Store
            </h1>
            <p
              className="text-white banner-subTitle pb-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Special offer for auto parts for electric cars and hybrid
              vehicles. To select the spare part you need, use the filter
              presented above or the advanced filter.
            </p>
            <button className="btn text-black bg-white px-14 rounded-sm hover:text-white" >
              Get Start
            </button>
            <div className="bg-small bottom-image absolute bottom-0 left-0">
              {/* <img className="w-full h-full" src={bgBottom} alt="" /> */}
            </div>
          </div>
          <div
            className="banner-bg hidden md:block"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="h-full w-full ml-[100px]" src={bg} alt="" />
          </div>
        </div>
        <div
          className="banner-image mt-14 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src={car} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
