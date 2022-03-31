// .belongsTo
// belongsToMnay
// .hasMany

const User = require("../models/User");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const Country = require("../models/Country");

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

module.exports = { User, Comment, Post, Country };
