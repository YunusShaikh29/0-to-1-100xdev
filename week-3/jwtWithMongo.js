const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

// mongoose.connect(
//   "/"
// );



const User = mongoose.model("Users", {
  name: String,
  username: String,
  pasword: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;

  const existingUser = await User.findOne({email: username})

  if(existingUser){
    return res.status(400).send('Username already exists')
  }

  const user = new User({
    name: name,
    username: username,
    password: password,
  });
  
  user.save();
  res.json({
    msg: "user created successfully!"
  })
});

function userExists(username, password) {}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3005);
