const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Post model
class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  country_name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    text_content: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 255],
    },
  },
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "post",
});

module.exports = Post;
