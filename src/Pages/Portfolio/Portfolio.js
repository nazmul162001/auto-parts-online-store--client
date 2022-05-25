import React from 'react';
import warehouse from '../../assets/images/portfolio/warehouse.png';
import fitness from '../../assets/images/portfolio/fitness-corner.png';
import analysis from '../../assets/images/portfolio/product-analysis.png';
import todos from '../../assets/images/portfolio/todos.png';

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
          Github:
          <a
            className="ml-1 font-normal text-blue-700 underline"
            href="https://foodie-store-6b0b2.web.app/"
            target="_blank"
          >
            My Gihub Profile
          </a>
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
        <div className="project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card w-full bg-base-100 card-shadow">
            <figure>
              <img src={warehouse} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Warehouse Management (Fruits)
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>
                This is warehouse management website. Users can create account &
                Upload their product. Also He can make change delete product,
                update product & change stock update quantity product anytime.
              </p>
              <div class="card-actions justify-center mt-5">
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a href="https://foodie-store-6b0b2.web.app/" target="_blank">
                    Live Link
                  </a>
                </div>
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a
                    href="https://github.com/nazmul162001/warehouse-management-client"
                    target="_blank"
                  >
                    Client-side Code
                  </a>
                </div>
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a
                    href="https://github.com/nazmul162001/warehouse-management-server"
                    target="_blank"
                  >
                    Server-side Code
                  </a>
                </div>
              </div>
              <div className="usage-technologies mt-3">
                <h2>Usage Technologies:</h2>
                <span className="badge badge-outline m-1">React</span>
                <span className="badge badge-outline m-1">React-router</span>
                <span className="badge badge-outline m-1">Tailwindcss</span>
                <span className="badge badge-outline m-1">Firebase</span>
                <span className="badge badge-outline m-1">JWT</span>
                <span className="badge badge-outline m-1">MongoDB</span>
                <span className="badge badge-outline m-1">NodeJs</span>
              </div>
            </div>
          </div>
          <div class="card w-full bg-base-100 card-shadow">
            <figure>
              <img src={fitness} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Fitness Corner (Gym)
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>
                It is Health & fitness related website. Users can booking for
                enrollment & see our daily activity & blogs
              </p>
              <div class="card-actions justify-center mt-5">
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a
                    href="https://fitness-corner-93736.web.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                </div>
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a
                    href="https://github.com/nazmul162001/fitness-corner-website--react"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="usage-technologies mt-3">
                <h2>Usage Technologies:</h2>
                <span className="badge badge-outline m-1">React</span>
                <span className="badge badge-outline m-1">React-router</span>
                <span className="badge badge-outline m-1">Tailwindcss</span>
                <span className="badge badge-outline m-1">Firebase</span>
                <span className="badge badge-outline m-1">JWT</span>
              </div>
            </div>
          </div>
          <div class="card w-full bg-base-100 card-shadow">
            <figure>
              <img src={analysis} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Product Analysis (Headphone)
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>
                If a simple product review website.Here is the review of
                headphones.{' '}
              </p>
              <div class="card-actions justify-center mt-5">
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a href="https://review-gallery.netlify.app/" target="_blank">
                    Live Link
                  </a>
                </div>
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a
                    href="https://github.com/nazmul162001/product-analysis-react-router-firebase"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="usage-technologies mt-3">
                <h2>Usage Technologies:</h2>
                <span className="badge badge-outline m-1">React</span>
                <span className="badge badge-outline m-1">React-router</span>
                <span className="badge badge-outline m-1">Tailwindcss</span>
                <span className="badge badge-outline m-1">JWT</span>
                <span className="badge badge-outline m-1">Firebase</span>
              </div>
            </div>
          </div>
          <div class="card w-full bg-base-100 card-shadow">
            <figure>
              <img src={todos} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Todo App
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>
                This is a Simple todo app. Users can add their daily todos. Also
                added delete todos and mark as completed todos options{' '}
              </p>
              <div class="card-actions justify-center mt-5">
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a href="https://todos-app-30758.web.app/" target="_blank">
                    Live Link
                  </a>
                </div>
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a
                    href="https://github.com/nazmul162001/todos-app-client"
                    target="_blank"
                  >
                    Client-side Code
                  </a>
                </div>
                <div class="badge badge-outline border-red-500 cursor-pointer">
                  <a
                    href="https://github.com/nazmul162001/todos-app-server"
                    target="_blank"
                  >
                    Server-side Code
                  </a>
                </div>
              </div>
              <div className="usage-technologies mt-3">
                <h2>Usage Technologies:</h2>
                <span className="badge badge-outline m-1">React</span>
                <span className="badge badge-outline m-1">React-router</span>
                <span className="badge badge-outline m-1">Tailwindcss</span>
                <span className="badge badge-outline m-1">Firebase</span>
                <span className="badge badge-outline m-1">Mongoose</span>
                <span className="badge badge-outline m-1">NodeJs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
