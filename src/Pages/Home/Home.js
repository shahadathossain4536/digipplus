import React from "react";
import logo from "../../image/logoipsum-226.svg";
import { FaRegLightbulb } from "react-icons/fa";
const Home = () => {
  return (
    <div className="px-[200px] py-6">
      <div className="">
        <div className="flex items-center justify-center">
          <img className="justify-center" src={logo} alt="" />
        </div>
        <h2 className="text-2xl text-center font-bold ">
          Welcome to Digipplus
        </h2>
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="w-[850px] ">
          <p className="text-right py-2">
            Announcements{" "}
            <span className="inline">
              <FaRegLightbulb className="inline" />
            </span>
          </p>
          <p className="bg-blue-200 w-[850px] text-blue-600 font-semibold inline-block py-2 px-2 rounded">
            We are working on adding Project and Internship Details, So just
            fill up profile only
          </p>
        </div>
      </div>
      <div>
        <p className="text-blue-500 text-lg font-bold ">Work Action</p>
        <p className="inline-block  shadow-2xl rounded  py-3 px-5 my-5 shadow-blue-300">
          View Intern Data
        </p>
      </div>
      <div className="mt-10">
        <p className="text-blue-500 text-lg font-bold ">Internship</p>
        <p className="inline-block  shadow-2xl rounded  py-3 px-5 my-5 shadow-blue-300">
          View Intern Data
        </p>
      </div>
    </div>
  );
};

export default Home;
