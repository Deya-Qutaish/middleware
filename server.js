const express = require("express");
const app = express();

app.use(logger);
app.use(auth);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  console.log(`User is admin = ${req.admin}`);
  res.send("Users Page");
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

function auth(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = true;
    next();
  } else {
    res.send("No Auth");
  }
}

app.listen(3000);
