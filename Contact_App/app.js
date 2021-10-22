const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { URL } = require("./url");
const router = require("./routes");
const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/contacts", router);

// let Schema = mongoose.Schema;
// let testSchema = new Schema({
//   name: String,
// });

// let Test = mongoose.model("test", testSchema);

app.get("/", (req, res) => {
  // let test = new Test({
  //   name: "Jack",
  // });
  // test.save();
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
