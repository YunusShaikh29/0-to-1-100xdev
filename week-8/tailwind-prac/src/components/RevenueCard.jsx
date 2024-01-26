import React from "react";

function RevenueCard({ title, showWarning, orderCount, amount }) {
  return (
    <>
      <div className="bg-[rgb(20, 110, 180)] rounded shadow-md p-8 hover:bg-blue-300 relative">
        {/* <h3>Revenue Card</h3> */}
        <div>{title}?</div>
        <div className="flex justify-between">
          <div className="font-semibold text-2xl">₹ {amount}</div>
          {orderCount ? (
            <div className="text-blue-500 flex underline cursor-pointer">
              {orderCount} order(s){" "}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  color="blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bg-blue-800 text-white w-full absolute left-0 mx-0 my-4 rounded flex justify-between px-4 py-2 font-[400]">
          <div>Next Payment Date:</div>
          <div>Today, 4:00PM</div>
        </div>
      </div>
    </>
  );
}

export default RevenueCard;
