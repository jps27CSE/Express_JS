const router = require("express").Router();
const {
  getAllPost,
  getSinglePost,
  createNewPost,
} = require("./postController");

router.get("/", getAllPost);

router.post("/postID", getSinglePost);

router.get("/:postID", createNewPost);

module.exports = router;
