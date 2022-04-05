const router = require("express").Router();
const { Post, User, Comment, Country } = require("../models");
//withAuth will need to be added again as well
//const withAuth = require("../../utils/auth");

// get all posts for dashboard
router.get("/", (req, res) => {
  console.log(req.session);
  console.log("======================");
  let posts = [];
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    // attributes: [
    //   "id",
    //   "user_id",
    //   "username",
    //   "created_at",
    //   "country_name",
    //   "location",
    // ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ["id", "comment", "post_id", "username", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // {
    //   model: Country,
    //   attributes: ["country_name"],
    // },
    // ],
  })
    .then((dbPostData) => {
      posts = dbPostData.map((post) => post.get({ plain: true }));
      posts = posts.map(function (post) {
        if (post.location === "Brooklyn Park") {
          post.location_color = "rgb(209,65,36)";
        } else if (post.location === "HQ-Maple Plain") {
          post.location_color = "rgb(229,114,0)";
        } else if (post.location === "Nashua") {
          post.location_color = "rgb(240,179,35)";
        } else if (post.location === "Plymouth") {
          post.location_color = "rgb(40, 114, 79)";
        } else if (post.location === "Raleigh") {
          post.location_color = "rgb(0, 85, 140)";
        } else if (post.location === "Rosemount") {
          post.location_color = "rgb(122, 92, 77)";
        } else {
          post.location_color = "black";
        }
        return post;
      });
      return Country.findAll({});
    })
    .then((dbCountryData) => {
      const countries = dbCountryData.map((country) =>
        country.get({ plain: true })
      );
      res.render("dashboard", { posts, countries, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", (req, res) => {
  Post.findByPk(req.params.id, {
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
        attributes: ["id", "comment", "post_id", "username", "created_at"],
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
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
