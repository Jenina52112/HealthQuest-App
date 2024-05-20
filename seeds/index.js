const seedRelaxDeepBreath = require("./relaxdeepbreath-seeds");
const seedRelaxImagery = require("./relaximagery-seeds");
const seedRelaxPRM = require("./relaxPRM-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedRelaxDeepBreath();
  // await sequelize.sync({ force: false });
  // console.log("\n----- DATABASE SYNCED -----\n");
  // await seedRelaxImagery();
  // await sequelize.sync({ force: false });
  // console.log("\n----- DATABASE SYNCED -----\n");
  // await seedRelaxPRM();
};

seedAll();
