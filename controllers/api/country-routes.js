const router = require("express").Router();
const { Post, User, Comment, Country } = require("../../models");
//const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Country.findAll({})
    .then((countries) => {
      console.log({ countries });
      res.render("dashboard", { countries });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

exports.module = router;

// We need to add more routes here!
