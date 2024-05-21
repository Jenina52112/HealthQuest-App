const seedRelaxDeepBreath = require("./relaxdeepbreath-seeds");
const seedRelaxDeepBreath = require("./relaxdeepbreath-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedRelaxDeepBreath();
};

seedAll();
