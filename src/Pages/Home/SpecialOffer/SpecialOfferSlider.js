import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SpecialOfferSllider.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import carBreak from '../../../assets/images/break.png';
import tyres from '../../../assets/images/tyres.png';
import clamping from '../../../assets/images/clamping.png';
import oil from '../../../assets/images/oil.png';
import Inflator from '../../../assets/images/Inflator.png';
import turbine from '../../../assets/images/turbine.png';

const SpecialOfferSlider = () => {
  return (
    <section className="special-slider px-12">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        loop={true}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="img">
              <img src={carBreak} alt="" />
            </div>
            <div className="content-special text-justify">
            <h2 className="text-3xl">Free Diagnostics Break</h2>
            <span className="text-primary text-xl">Innovative Protection System</span>
            <p className='text-gray-500'>A reliable and efficient breaking system gurantees the safety of you and your family. We work only with leaders and trusted brands</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
            <div className="img">
              <img src={tyres} alt="" />
            </div>
            <div className="content-special text-justify">
            <h2 className="text-3xl">Discounted Summer</h2>
            <span className="text-primary text-xl">Seasonal Disposal of Residues</span>
            <p className='text-gray-500'>Discounts on summer tires and wheels are especially large this year. This is due to the elimination of last year's models from leading manufacturers. All tires and wheels are officially guaranteed.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
            <div className="img">
              <img src={turbine} alt="" />
            </div>
            <div className="content-special text-justify">
            <h2 className="text-3xl">Sport Turbine With</h2>
            <span className="text-primary text-xl">Turbine Discount Sale</span>
            <p className='text-gray-500'>If your car starts having problems with gaining speed or engine thrust has disappeared, most likely these are problems with the turbine. Our specialists will conduct computer diagnostics free of charge.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
            <div className="img">
              <img src={oil} alt="" />
            </div>
            <div className="content-special text-justify">
            <h2 className="text-3xl">Original Germany Oil</h2>
            <span className="text-primary text-xl">Germany Oil With Sale</span>
            <p className='text-gray-500'>A special offer with a 30 percent discount from the German leader in the production of oils and chemicals for cars. Hurry up to purchase engine oil for all types of engines. Diagnostics and replacement free of charge.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
            <div className="img">
              <img src={clamping} alt="" />
            </div>
            <div className="content-special text-justify">
            <h2 className="text-3xl">Auto-Clamping</h2>
            <span className="text-primary text-xl">Innovative Charging Sensor</span>
            <p className='text-gray-500'>Wireless Car Charger combines an air vent phone mount holder and a wireless charger into one.Our Qi car charger has latest standard and built-in lastest smart chip with multiple protections such as overcharge.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
            <div className="img">
              <img src={Inflator} alt="" />
            </div>
            <div className="content-special text-justify">
            <h2 className="text-3xl">Tire Inflator Air</h2>
            <span className="text-primary text-xl">Compressor With Sale</span>
            <p className='text-gray-500'>Preset your desired pressure value, the tire pump will automatically shut off when the pre-set pressure has been achieved, So you don’t have to worry about over inflating or low tire pressure anymore. Convoy your safety all the way.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SpecialOfferSlider;
