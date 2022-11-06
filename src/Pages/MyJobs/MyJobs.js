import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
const MyJobs = () => {
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
          <div className="w-[270px] fixed top-[80px] left-[50px] rounded-md bg-slate-800 p-5">
            <ul>
              <li className="my-5">
                <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
                  jobs
                </p>
                <p
                  className={`w-[240px] bg-slate-200 rounded py-2 px-2 ${
                    location.pathname === "/my-jobs"
                      ? "bg-slate-500 text-white"
                      : ""
                  }`}
                >
                  <Link to="/my-jobs" className="uppercase text-lg my-2 ">
                    Solution Writing
                  </Link>
                </p>
              </li>
              <li className="my-5">
                <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
                  FOR JOB APPLICATION
                </p>
                <p
                  className={`w-[240px] bg-slate-200 rounded py-2 px-2 ${
                    location.pathname === "/my-jobs/job-application"
                      ? "bg-slate-500 text-white"
                      : ""
                  }`}
                >
                  <Link to="/my-jobs/job-application" className="text-lg my-2">
                    SCREENING TASKS
                  </Link>
                </p>
              </li>
              <li className="my-5">
                <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
                  APPLICATION STATUS
                </p>
                <p
                  className={`w-[240px] bg-slate-200 rounded py-2 px-2 ${
                    location.pathname === "/my-jobs/application-status"
                      ? "bg-slate-500 text-white"
                      : ""
                  }`}
                >
                  <Link
                    to="/my-jobs/application-status"
                    className="text-lg my-2"
                  >
                    JOB APPLICATION STATUS
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        )}
        <div className="w-[350px] hidden lg:block">
          <ul>
            <li className="my-5">
              <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
                jobs
              </p>
              <p
                className={`w-[340px] bg-slate-200 rounded py-2 px-2 ${
                  location.pathname === "/my-jobs"
                    ? "bg-slate-500 text-white"
                    : ""
                }`}
              >
                <Link to="/my-jobs" className="uppercase text-lg my-2 ">
                  Solution Writing
                </Link>
              </p>
            </li>
            <li className="my-5">
              <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
                FOR JOB APPLICATION
              </p>
              <p
                className={`w-[340px] bg-slate-200 rounded py-2 px-2 ${
                  location.pathname === "/my-jobs/job-application"
                    ? "bg-slate-500 text-white"
                    : ""
                }`}
              >
                <Link to="/my-jobs/job-application" className="text-lg my-2">
                  SCREENING TASKS
                </Link>
              </p>
            </li>
            <li className="my-5">
              <p className="uppercase text-lg text-blue-500 font-semibold mb-4">
                APPLICATION STATUS
              </p>
              <p
                className={`w-[340px] bg-slate-200 rounded py-2 px-2 ${
                  location.pathname === "/my-jobs/application-status"
                    ? "bg-slate-500 text-white"
                    : ""
                }`}
              >
                <Link to="/my-jobs/application-status" className="text-lg my-2">
                  JOB APPLICATION STATUS
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

export default MyJobs;
