import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-1.png';

const Navbar = ({ children }) => {  
  return (
    <div>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div class="w-full navbar bg-primary h-24 px-12 text-white sticky top-0">
            {/* flex flex-row-reverse md:flex-row */}
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
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
              </label>
            </div>
            <div class="flex-1">
              <img className="w-12" src={logo} alt="/logo" />
              <h2 className="text-3xl text-white font-bold">Auto Parts</h2>
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to='/blogs'>Blogs</NavLink>
                </li>
                <li>
                  <NavLink to='/login'>Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-accent">
            <div class="flex justify-end lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  class="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            {/* <!-- Sidebar content here --> */}
            <div class="flex justify-center">
              <img className="w-12" src={logo} alt="/logo" />
              <h2 className="text-3xl text-white font-bold">Auto Parts</h2>
            </div>
            <li>
              <NavLink to='/' className='mx-auto'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/' className='mx-auto'>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to='/' className='mx-auto'>Blogs</NavLink>
            </li>
            <li>
              <NavLink to='/' className='mx-auto'>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
