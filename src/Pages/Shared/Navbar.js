import React from "react";
import { Link, useLocation, useRoutes } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log("pathname", location.pathname);

  const menuItem = (
    <>
      <li
        className={`mx-2 text-xl ${
          location.pathname === "/home"
            ? "text-blue-500 border-b-2 border-b-blue-500 pb-1"
            : ""
        }`}
      >
        <Link to="/home">Home</Link>
      </li>
      <li
        className={`mx-2 text-xl ${
          location.pathname === "/my-jobs"
            ? "text-blue-500 border-b-2 border-b-blue-500 pb-1"
            : ""
        } ${
          location.pathname === "/my-jobs/job-application"
            ? "text-blue-500 border-b-2 border-b-blue-500 pb-1"
            : ""
        } ${
          location.pathname === "/my-jobs/application-status"
            ? "text-blue-500 border-b-2 border-b-blue-500 pb-1"
            : ""
        }`}
      >
        <Link to="/my-jobs">My Jobs</Link>
      </li>
      <li
        className={`mx-2 text-xl ${
          location.pathname === "/my-offer-letter"
            ? "text-blue-500 border-b-2 border-b-blue-500 pb-1"
            : ""
        }`}
      >
        <Link to="/my-offer-letter">My Offer Letter </Link>
      </li>
      <li
        className={`mx-2 text-xl ${
          location.pathname === "/my-payment"
            ? "text-blue-500 border-b-2 border-b-blue-500 pb-1"
            : ""
        }${
          location.pathname === "/my-payment/invoices"
            ? "text-blue-500 border-b-2 border-b-blue-500 pb-1"
            : ""
        }`}
      >
        <Link to="/my-payment">My Payment</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-xl shadow-blue-200 ">
      <div className="navbar-start">
        <div className="dropdown bg-slate-40">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 p-2  w-52 bg-slate-40"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          DIGIPPLUS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex 0">
        <ul className="menu menu-horizontal p-0 ">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
