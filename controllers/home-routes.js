const router = require("express").Router();
const { Post, User, Comment, Country } = require("./../models");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "user_id",
      "username",
      "created_at",
      "country_name",
      "location",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Country,
        attributes: ["country_name"],
      },
    ],
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      console.log(dbPostData[0]);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
