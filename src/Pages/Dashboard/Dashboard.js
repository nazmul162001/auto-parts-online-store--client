import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <h2 className="text-3xl text-gray-500 font-bold">Your Dashboard</h2>
          <Outlet />
          {/* <label for="my-drawer-2"class="btn btn-primary drawer-button lg:hidden">Open</label> */}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="mb-2">
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/review">Add Review</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/addProduct">Add Product</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/manageProduct">Manage Product</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/manageOrders">Manage Orders</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
