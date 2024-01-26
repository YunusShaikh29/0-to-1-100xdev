import React from "react";
import User from "./User";

const dummyUsers = [
  {
    username: "Yunus Shaikh",
  },
  {
    username: "hadi shaikh",
  },
  {
    username: "Junaid Shaikh",
  },
];

function UserList() {
  return (
    <div className="mb-8">
      {dummyUsers.map((user) => (
        <User user={user.username} key={user[1]} />
      ))}
    </div>
  );
}

export default UserList;
