import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";
import Part from "./Part";

const Parts = () => {
  // const [services, setServices] = useState([]);

  // useEffect(()=> {
  //   const url = 'http://localhost:5000/service';
  //   fetch(url)
  //   .then(res=> res.json())
  //   .then(data => setServices(data))
  // },[])

  // useQuery
  const {
    data: services,
    isloading,
    refetch,
  } = useQuery("item", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  if (isloading) {
    return <Spinner />;
  }

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
        {services?.map((service) => (
          <Part key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
