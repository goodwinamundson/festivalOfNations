const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Country extends Model {}

Country.init (
    {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            primaryKey: true
        },
        country_name: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            foreignKey: true
        },
        HQ: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        Rosemount: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        Plymouth: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        BrooklynPark: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        Raleigh: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        Nashua: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'country'
      }
    );


Country.bulkCreate([
    {country_name: "Peru", isActive: true},
    {country_name: "Morocco", isActive: true},
    {country_name: "Croatia", isActive: true},
    {country_name: "Mexico", isActive: true},
    {country_name: "Vietnam", isActive: true}
]);

module.exports = Country;

