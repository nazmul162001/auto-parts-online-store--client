import React from 'react';

const GetQuote = () => {
  return (
    <div className="rounded-2xl mx-auto mt-[-30px] md:mt-[-50px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6">
      <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
      <button className="btn btn-primary mt-5">Get a Quote</button>
    </div>
  );
};

export default GetQuote;
