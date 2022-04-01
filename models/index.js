const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");
const Country = require("./Country");

// this file might need some adjusting!

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

//this might be incorrect!
Post.belongsTo(Country, {
  foreignKey: "country_id",
  onDelete: "SET NULL",
});

//this might be incorrect!
Country.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
// this might be incorrect!
Country.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});
//this might be incorrect!
User.belongsTo(Country, {
  foreignKey: "country_id",
  onDelete: "SET NULL",
});
// this might be incorrect!
User.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

module.exports = { User, Comment, Post, Country };
