import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MyJobs = () => {
  const location = useLocation();

  console.log("pathname", location.pathname);
  return (
    <div className="py-10 px-12 flex gap-5">
      <div className="w-[350px]">
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
  );
};

export default MyJobs;
