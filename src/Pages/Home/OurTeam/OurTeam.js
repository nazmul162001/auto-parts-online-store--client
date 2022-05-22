import React from 'react';
import OurTeamInfo from './OurTeamInfo';

const OurTeam = () => {
  return (
    <section className="our-team my-28">
      <div className="title text-center mb-5">
        <span className="text-sm text-white bg-primary px-3 py-1 rounded-full">
          Professional
        </span>
      </div>
      <h2 className="text-center text-primary text-5xl font-bold uppercase opacity-60">
        OUR TEAM
      </h2>
      <div className="w-60 h-1 bg-primary mx-auto my-3"></div>
      <p className="text-gray-500 text-center mb-12">
        Our team consists of only highly qualified specialists in the field of
        car maintenance.
      </p>

      <OurTeamInfo />
    </section>
  );
};

export default OurTeam;
