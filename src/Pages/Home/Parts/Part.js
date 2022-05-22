import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';

const Part = ({ service }) => {
  const [color, setColor] = useState(false);
  const { img, name, description, minimumOrder, availableQuantity, price } =
    service;
  return (
    <div className="available-part border-2 rounded-md">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            className="w-48 p-8"
            src={img}
            alt="suspension"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body text-justify">
          <h2 class="card-title">{name} </h2>
          <p>{description}</p>
          <div className="order-minimum flex justify-between items-center">
            <p className="flex items-center ">
              <MdKeyboardArrowRight className="text-primary text-xl" /> Minimum
              Order
            </p>
            <p className="text-right">{minimumOrder}</p>
          </div>
          <div className="quantity flex justify-between items-center">
            <p className="flex items-center ">
              <MdKeyboardArrowRight className="text-primary text-xl" />{' '}
              Available Quantity
            </p>
            <p className="text-right">{availableQuantity}</p>
          </div>
          <div className="price flex justify-between items-center">
            <p className="flex items-center font-bold text-xl">
              {' '}
              <BsCurrencyDollar className="" /> {price}
            </p>
            <div>
              <p onClick={()=>{setColor(!color)}} className="text-right cursor-pointer">
                <BsSuitHeart className={color ? 'text-gray-500 text-2xl' : 'text-primary text-2xl'} />{' '}
              </p>
            </div>
          </div>
          <button className='btn btn-outline'>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
