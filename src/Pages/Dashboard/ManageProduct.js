import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import ManageProductInfo from './ManageProductInfo';

const ManageProduct = () => {
  const [services, setServices] = useState([]);

  useEffect(()=> {
    const url = 'https://boiling-ridge-27693.herokuapp.com/service';
    fetch(url)
    .then(res=> res.json())
    .then(data => setServices(data))
  },[])

  return (
    <div className="my-16 px-12">
      <div className="service-title text-center">
        <h3 className="text-primary text-5xl font-bold opacity-60">
          Manage Your Product
        </h3>
        <div className="line w-96 opacity-60 my-4 h-[2px] bg-primary mx-auto"></div>
      </div>

      {/* available parts  */}
      <div className="available-parts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services?.map((service) => (
          <ManageProductInfo key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
