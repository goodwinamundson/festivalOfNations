const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Post model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // which country_name would be best to use?

    // country_name: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "country",
    //     key: "id",
    //   },
    // },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
