const router = require("express").Router();
const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");
// const countryRoutes = require("./country-routes");

router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
// router.use('/countries', countryRoutes);

module.exports = router;
