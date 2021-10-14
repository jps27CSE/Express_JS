exports.getAllPost = (req, res) => {
  let { category, page, filter } = req.query;
  res.send("Render all Posts");
};

exports.getSinglePost = (req, res) => {
  res.send("Create new post");
};

exports.createNewPost = (req, res) => {
  res.send("<h1>I am post = </h1>" + req.params.postID);
};
