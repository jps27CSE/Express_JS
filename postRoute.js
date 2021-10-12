const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Render all Posts");
});

router.post("/", (req, res) => {
  res.send("Create new post");
});

module.exports = router;
