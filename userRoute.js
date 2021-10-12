const router = require("express").Router();

router.get("/login", (req, res, next) => {
  res.send("i am login router");
});

router.get("/logout", (req, res, next) => {
  res.send("i am logout router");
});

router.get("/signup", (req, res, next) => {
  res.send("i am signup router");
});

module.exports = router;
