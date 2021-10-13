const express = require("express");
const morgan = require("morgan");
const userRouter = require("./userRoute");
const postRouter = require("./postRoute");
const router = require("./postRoute");
const app = express();
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/posts", postRouter);
// app.get("/products/:productID", (req, res) => {
//   console.log(req.params);
//   res.send("<h1>i am listening </h1>" + req.params.productID);
// });

router.get("/:postID", (req, res) => {
  res.send("<h1>I am post = </h1>" + req.params.productID);
});

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
