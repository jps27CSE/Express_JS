const router = require("express").Router();

router.get("/postID", (req, res) => {
  res.send("Render all Posts");
});

router.post("/postID", (req, res) => {
  res.send("Create new post");
});

router.get("/:postID", (req, res) => {
  res.send("<h1>I am post = </h1>" + req.params.postID);
});

module.exports = router;
