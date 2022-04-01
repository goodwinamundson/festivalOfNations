const seedCountries = require("./country-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("********************");
  await seedCountries();
  process.exit(0);
};

seedAll();
