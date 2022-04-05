// **** ALL EVENTS PAGE?? ****

const router = require("express").Router();
const { Post, User, Comment, Country } = require("./../models");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "user_id", "created_at", "country_name", "location"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
      //MAY NEED TO BE ADDED BACK IN LATER
      // {
      //   model: Country,
      //   attributes: ["country_name"],
      // },
    ],
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      console.log(dbPostData[0]);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // THIS WOULD RENDER THE `ALL EVENTS PAGE` {i believe} ROUTES ARE NOT WORKING CORRECTLY:
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ADD ON 4/4-SO get single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "user_id", "created_at", "country_name", "location"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
      //MAY NEED TO BE ADDED BACK IN LATER
      // {
      //   model: Country,
      //   attributes: ["country_name"],
      // },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });
      // WE DO NOT HAVE A SINGLE-POST HANDLEBARS FILE
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    // place .sendMail() in here!
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
