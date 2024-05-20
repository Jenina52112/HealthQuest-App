const seedRelaxDeepBreath = require("./relaxdeepbreath-seeds");

const sequelize = require("../config/connection");

//call the seed method for the Relax deep breath table
//use npm run seed to populate the table
const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedRelaxDeepBreath();
};

seedAll();
