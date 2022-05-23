import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const [service, setService] = useState({});
  const {id} = useParams();

  const url = `http://localhost:5000/service/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => setService(data));
  
  return (
    <section className='purchase w-full h-screen px-12'>
      <h2 className="text-center text-4xl text-primary mt-5">This is my purchase page {service.name} </h2>
    </section>
  );
};

export default Purchase;