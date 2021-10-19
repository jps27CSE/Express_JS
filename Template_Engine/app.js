const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "about" });
});

app.get("/help", (req, res) => {
  res.render("pages/help", { title: "help" });
});

app.get("/", (req, res) => {
  let post = {
    title: "Post Number 1",
    body: "Hello this is post 1",
    condition: true,
  };

  let posts = [
    { title: "title one", author: "Jack" },
    { title: "title two", author: "Pritom" },
    { title: "title three", author: "Soren" },
  ];
  res.render("pages/index", {
    title: "Jack Pritom Soren",
    post,
    posts,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
