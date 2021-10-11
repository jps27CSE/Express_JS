const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send("i am login router");
});

router.get("/logout", (req, res, next) => {
  res.send("i am logout router");
});

router.get("/signup", (req, res, next) => {
  res.send("i am signup router");
});

app.use("/user", router);

app.get("/about", morgan("dev"), (req, res) => {
  res.send("<h1>i am about page</h1>");
});

app.get("/help", (req, res) => {
  res.send("<h1>i am help page</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>I am Listening</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
