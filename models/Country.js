const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Country extends Model {}

Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "post",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "country",
  }
);

module.exports = Country;
