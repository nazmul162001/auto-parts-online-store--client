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
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="mb-2">
              <Link to="/dashboard">NavLink Item 1</Link>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/review">Sidebar Item 2</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/dashboard/profile">Sidebar Item 3</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
