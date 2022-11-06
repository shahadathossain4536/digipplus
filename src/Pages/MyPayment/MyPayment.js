import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MyPayment = () => {
  const location = useLocation();

  console.log("pathname", location.pathname);
  return (
    <div className="py-10 px-12 flex gap-5">
      <div className="w-[350px]">
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
  );
};

export default MyPayment;
