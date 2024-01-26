import React from "react";
import UserIcon from "./UserIcon";

function User({ user }) {
  return (
    <>
    <div className="w-full flex justify-between">
      <div className="flex gap-6 mb-6">
        <UserIcon user={user} />
        <h4 className=" text-white text-2xl font-[400]">{user}</h4>
      </div>

      <div>
        <button className="bg-black text-white py-2 px-2 rounded-md hover:bg-zinc-900 w-[8rem]">
          Send Money
        </button>
      </div>
      
    </div>
    <p className="border-b-2 border-slate-800 mb-4"></p>
    </>
  );
}

export default User;
