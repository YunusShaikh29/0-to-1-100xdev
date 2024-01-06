const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const jwtPassword = "12345678";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

const userExists = (username, password) => {
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      return true;
    }
  }
  return false;
};

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exist in our memory db",
    });
  }

  let token = jsonwebtoken.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jsonwebtoken.verify(token, jwtPassword);
    const username = decoded.username;
    return res.json(ALL_USERS.filter((user) => user.username !== username));
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(7)
