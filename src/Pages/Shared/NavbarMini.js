import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const NavbarMini = () => {
  return (
    <div className='hidden lg:block'>
      <div className="second-navbar h-10 my-3 text-white px-12 flex justify-between items-center">
        <div className='flex items-center'>
          <ul className="menu menu-horizontal p-0 btn btn-black rounded-none bg-black mr-8">
            <li tabindex="0">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <span className="pr-14">All Products</span>
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-black w-full">
                <li style={{borderBottom: '1px dotted gray'}} className='py-3'>
                  <a>Engine Parts</a>
                </li>
                <li style={{borderBottom: '1px dotted gray'}} className='py-3'>
                  <a>Suspension Parts</a>
                </li>
                <li style={{borderBottom: '1px dotted gray'}} className='py-3'>
                  <a>Body & Drive</a>
                </li>
                <li className='py-3'>
                  <a>Wheels & Tires</a>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-primary font-bold text-lg"><FiPhoneCall className='text-2xl mr-2' /> + 8 100 123 575</button>
        </div>
        <div class="btn-group">
          <input
            className="border-2 px-3 w-80 focus:border-[1px] focus:border-primary focus:outline-none text-black"
            type="search"
            name="search"
            id="search"
            placeholder="Enter the name of parts"
          />
          <button class="btn btn-primary rounded-none">Search</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMini;
