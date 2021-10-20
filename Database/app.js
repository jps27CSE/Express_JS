const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { URL } = require("./url");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "welcome",
  });
});

const PORT = process.env.PORT || 8080;

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on Port = http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
