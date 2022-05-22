import React from 'react';
import suspension from '../../../assets/images/suspension.png';
import steering from '../../../assets/images/steering.png';
import wheels from '../../../assets/images/wheels.png';
import Part from './Part';

const Parts = () => {
  const services = [
    {
      _id: 1,
      name: 'Suspension',
      img: suspension,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      minimumOrder: 200,
      availableQuantity: 8000,
      price: 149,
    },
    {
      _id: 2,
      name: 'Steering',
      img: steering,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      minimumOrder: 100,
      availableQuantity: 6000,
      price: 299,
    },
    {
      _id: 3,
      name: 'Wheels',
      img: wheels,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      minimumOrder: 150,
      availableQuantity: 7000,
      price: 350,
    },
  ];

  return (
    <div className="my-16 px-12">
      <div className="service-title text-center">
        <h3 className="text-primary text-5xl font-bold opacity-60">
          Tools/Parts
        </h3>
        <div className="line w-56 opacity-60 mt-2 h-[2px] bg-primary mx-auto"></div>
        <h2 className="text-gray-500 text-xl py-2">
          Available Parts In Our Store
        </h2>
      </div>

      {/* available parts  */}
      <div className="available-parts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Part key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
