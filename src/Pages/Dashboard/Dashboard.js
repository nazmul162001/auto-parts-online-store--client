import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h2 className="text-3xl text-gray-500 font-bold">Your Dashboard</h2>
          <Outlet />
          {/* <label htmlFor="my-drawer-2"class="btn btn-primary drawer-button lg:hidden">Open</label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <li className="mb-2">
                <Link to="/dashboard">My Orders</Link>
              </li>
            )}
            {!admin && (
              <li className="mb-2">
                <NavLink to="/dashboard/review">Add Review</NavLink>
              </li>
            )}
            {admin && (
              <li className="mb-2">
                <NavLink to="/dashboard/addProduct">Add Product</NavLink>
              </li>
            )}
            {admin && (
              <li className="mb-2">
                <NavLink to="/dashboard/manageProduct">Manage Product</NavLink>
              </li>
            )}
            {admin && (
              <li className="mb-2">
                <NavLink to="/dashboard/manageOrders">Manage Orders</NavLink>
              </li>
            )}
            {admin && (
              <li className="mb-2">
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
              </li>
            )}
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
