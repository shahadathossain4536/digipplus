import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
const MyPayment = () => {
  const location = useLocation();

  console.log("pathname", location.pathname);
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)} className="lg:hidden block m-5">
        <IoIosMenu className="text-2xl " />
      </button>
      <div className="py-10 px-12 flex gap-5">
        {show && (
          <div className=" fixed top-[80px] left-[50px] p-5  w-[250px] rounded-md bg-slate-800">
            <ul>
              <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
                PAYMENT NAVIGATION
              </p>
              <li className="my-5">
                <p
                  className={`w-[180px] bg-slate-200 rounded py-2 px-2 ${
                    location.pathname === "/my-payment"
                      ? "bg-slate-500 text-white"
                      : ""
                  }`}
                >
                  <Link to="/my-payment" className="uppercase text-lg my-2 ">
                    INVOICES
                  </Link>
                </p>
              </li>

              <li className="my-5">
                <p
                  className={`w-[180px] bg-slate-200 rounded py-2 px-2 ${
                    location.pathname === "/my-payment/invoices"
                      ? "bg-slate-500 text-white"
                      : ""
                  }`}
                >
                  <Link to="/my-payment/invoices" className="text-lg my-2">
                    MY BANK DETAILS
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        )}
        <div className="w-[350px] hidden lg:block">
          <ul>
            <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
              PAYMENT NAVIGATION
            </p>
            <li className="my-5">
              <p
                className={`w-[340px] bg-slate-200 rounded py-2 px-2 ${
                  location.pathname === "/my-payment"
                    ? "bg-slate-500 text-white"
                    : ""
                }`}
              >
                <Link to="/my-payment" className="uppercase text-lg my-2 ">
                  INVOICES
                </Link>
              </p>
            </li>

            <li className="my-5">
              <p
                className={`w-[340px] bg-slate-200 rounded py-2 px-2 ${
                  location.pathname === "/my-payment/invoices"
                    ? "bg-slate-500 text-white"
                    : ""
                }`}
              >
                <Link to="/my-payment/invoices" className="text-lg my-2">
                  MY BANK DETAILS
                </Link>
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyPayment;
