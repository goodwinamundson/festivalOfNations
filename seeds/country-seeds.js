const { Country } = require("../models");

const countryData = [
  {
    country_name: "United States of America",
    //country_id: 1,
  },
  {
    country_name: "Canada",
    //country_id: 2,
  },
  {
    country_name: "Mexico",
    //country_id: 3,
  },
  {
    country_name: "United Kingdom",
    //country_id: 4,
  },
  {
    country_name: "France",
    //country_id: 5,
  },
  {
    country_name: "Germany",
    // country_id: 6,
  },
  {
    country_name: "Italy",
    // country_id: 7,
  },
  {
    country_name: "Spain",
    // country_id: 8,
  },
  {
    country_name: "Switzerland",
    // country_id: 9,
  },
  {
    country_name: "United Arab Emirates",
    // country_id: 10,
  },
  {
    country_name: "Australia",
    // country_id: 11,
  },
  {
    country_name: "New Zealand",
    // country_id: 12,
  },
  {
    country_name: "India",
    // country_id: 13,
  },
  {
    country_name: "China",
    // country_id: 14,
  },
  {
    country_name: "Japan",
    // country_id: 15,
  },
  {
    country_name: "South Korea",
    // country_id: 16,
  },
  {
    country_name: "Brazil",
    // country_id: 17,
  },
  {
    country_name: "Argentina",
    // country_id: 18,
  },
  {
    country_name: "Colombia",
    // country_id: 19
  },
  {
    country_name: "Peru",
    // country_id: 20,
  },
  {
    country_name: "Venezuela",
    // country_id: 21,
  },
  {
    country_name: "Honduras",
    // country_id: 22,
  },
  {
    country_name: "Cuba",
    // country_id: 23,
  },
  {
    country_name: "Dominican Republic",
    // country_id: 24,
  },

  {
    country_name: "Egypt",
    // country_id: 25,
  },
];

const seedCountries = () => Country.bulkCreate(countryData);

module.exports = seedCountries;
