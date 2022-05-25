import React from 'react';

const Portfolio = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-center text-5xl text-gray-500 my-3 font-bold">
        My Portfolio
      </h1>
      <div className="line w-72 h-1 bg-gray-500 mx-auto mb-8"></div>
      <div className="personal-info w-full md:w-2/3 mx-auto px-5 md:px-6 lg:px-8">
        <h1 className="text-3xl text-gray-500 font-bold text-center">
          Nazmul Hassan
        </h1>
        <h3 className="text-2xl text-gray-500 font-bold text-center">
          Junior Front-end Developer
        </h3>
        <p className="font-bold text-lg mt-12">
          Address: <strong className="font-normal">Jashore, Bangladesh</strong>
        </p>
        <p className="font-bold text-lg">
          Email:{' '}
          <strong className="font-normal">webdevnazmulh@gmail.com</strong>
        </p>
        <p className="font-bold text-lg">
          Education:{' '}
          <strong className="font-normal">
            Bachelor of Political Science - 2018 to Present
          </strong>
        </p>
        <p className="font-bold text-lg">
          List Of Technologies:{' '}
          <strong className="font-normal">
            React ◼ React-router ◼ Tailwindcss ◼ Daisyui ◼ Firebase ◼ MongoDB ◼
            Nodejs ◼ JWT ◼ React-Query ◼ React-hook form
          </strong>
        </p>
        <h3 className="text-center text-3xl text-gray-500 font-bold my-5 pb-2 ">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
            <span className="relative text-white"> Skill </span>
          </span>
        </h3>
        <div className="skill grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            React
          </span>
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            React-router
          </span>
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            Javascript
          </span>
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            Firebase
          </span>
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            Tailwindcss
          </span>
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            Bootstrap
          </span>
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            MongoDB
          </span>
          <span className="px-5 py-2 border-4 border-indigo-200 border-b-indigo-500 mr-3">
            Nodejs
          </span>
        </div>
      </div>

      <div className="recent-project my-12 px-5 md:px-8 lg:px-12">
        <h2 className="text-center text-5xl text-gray-500 font-bold my-5">
          Recent Project
        </h2>
        <div className="project grid grid-cols-1 md:grid-cols-3">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
