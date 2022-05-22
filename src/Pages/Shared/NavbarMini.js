import React from 'react';

const NavbarMini = () => {
  return (
    <>
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
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-primary">+ 8 100 123 575</button>
        </div>
        <div class="btn-group">
          <input
            className="border-2 px-3 w-96 focus:border-[1px] focus:border-primary focus:outline-none text-black"
            type="search"
            name="search"
            id="search"
            placeholder="Enter the name of parts"
          />
          <button class="btn btn-primary rounded-none">Search</button>
        </div>
      </div>
    </>
  );
};

export default NavbarMini;
