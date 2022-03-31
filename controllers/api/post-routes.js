// route that shows all claims made for a country/countries
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Country } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  console.log("**********************");
  Post.findAll({
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      //"user_id",???
      // "country_id", ????
      [
        // sequelize.literal(
        //   "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        // ),
        // "vote_count",
      ],
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
      // {
      //   model: Country,
      //   attributes: ["country_name", "country_id"],????
      // }
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      // "user_id", ???
      // "country_id", ????
      [
        // sequelize.literal(
        //   "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        // ),
        // "vote_count",
      ],
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
      // {
      //   model: Country,
      //   attributes: ["country_name", "country_id"],????
      // }
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}???
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    user_id: req.session.user_id,
    //CountryId: req.body.CountryId???
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add Country info in here: ????

// router.put("/upvote", withAuth, (req, res) => {
//   // custom static method created in models/Post.js
//   Post.upvote(
//     { ...req.body, user_id: req.session.user_id },
//     { Vote, Comment, User }
//   )
//     .then((updatedVoteData) => res.json(updatedVoteData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "Sorry, no post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// SHOULD WE ADD COUNTRY_ID HERE TOO SO THAT WAY THE COUNTRY AVAILABILITIES CAN BE UPDATED WHEN THE POST IS DELETED?
router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "Sorry, no post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
