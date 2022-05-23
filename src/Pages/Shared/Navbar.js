import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-1.png';

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-primary h-24 px-12 text-white sticky top-0 z-50">
            {/* flex flex-row-reverse md:flex-row */}
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <img className="w-12" src={logo} alt="/logo" />
              <h2 className="text-3xl text-white font-bold">Auto Parts</h2>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu overflow-y-auto w-80 bg-primary">
            <div className="flex justify-end lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  className="swap-on fill-current"
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
            <div className="flex justify-center">
              <img className="w-12" src={logo} alt="/logo" />
              <h2 className="text-3xl text-white font-bold">Auto Parts</h2>
            </div>
            <li className="mt-5" style={{ borderBottom: '1px dotted white' }}>
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li style={{ borderBottom: '1px dotted white' }}>
              <NavLink to="/" className="">
                Dashboard
              </NavLink>
            </li>
            <li style={{ borderBottom: '1px dotted white' }}>
              <NavLink to="/" className="">
                Portfolio
              </NavLink>
            </li>
            <li style={{ borderBottom: '1px dotted white' }}>
              <NavLink to="/" className="">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
