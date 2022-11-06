import React from "react";

const MyBankDetails = () => {
  return (
    <div className="flex gap-5">
      <div className="border-2 border-black rounded-md py-4 px-6">
        <p>
          Payment Date:{" "}
          <span className="font-semibold">Oct. 25, 2022, 11:07 a.m.</span>{" "}
          Amount Paid: <span className="font-semibold">#3150</span>
        </p>
        <p>Payment Made For Project</p>
        <p>K10 Maths Text Book Solution</p>
        <p>K12 Maths Text Book Solution</p>
      </div>
      <div>
        <p>Lifetime Earning</p>
        <p className="font-semibold">₹3150</p>
        <p>This Month Earning</p>
        <p className="font-semibold">₹0</p>
      </div>
    </div>
  );
};

export default MyBankDetails;
