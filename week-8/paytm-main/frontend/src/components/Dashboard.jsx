import React from "react";
import UserIcon from "./User/UserIcon";
// import User from "./User/User";
import UserList from "./User/UserList";

function Dashboard() {
  return (
    <div className="container">
      <div className="w-full px-8 py-4">
        <div className="w-full flex justify-between mb-6">
          <h1 className="text-white text-4xl font-[700]">Payment App</h1>
          <div className="text-white text-2xl font-[400] flex justify-between gap-4">
            Hello, User <UserIcon user={"Yunus shaikh"} />
          </div>
        </div>
        <p className="border-b-2 border-slate-800"></p>
        <div className="w-full my-8 text-white text-2xl font-[580]">
          <h4>Your Balance : ₹500000</h4>
        </div>
        <h4 className="w-full my-6 text-white text-2xl font-[600]">Users</h4>
        <input
          type="text"
          name=""
          id=""
          className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-gray-400 bg-zinc-900 text-white"
          placeholder="Search Users..."
        />
        <div className="my-8">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
