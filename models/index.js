// Initializes Sequelize and loads models
const Sequelize = require("sequelize");
const dbConfig = require("../config/config.json");

const sequelize = new Sequelize(dbConfig.development);

const models = {
  User: require("./user")(sequelize, Sequelize),
  Journal: require("./journal")(sequelize, Sequelize),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models,
};
