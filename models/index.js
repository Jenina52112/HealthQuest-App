<<<<<<< HEAD
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
=======
// import models
const User = require("./user");
const RelaxDeepBreathTable = require("./Relax-deep-breath");
const RelaxGuidedImagery = require("./RelaxGuidedImagery");
const RelaxPRM = require("./Relax.PRM");

User.hasMany(RelaxDeepBreathTable, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

RelaxDeepBreathTable.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(RelaxGuidedImagery, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

RelaxGuidedImagery.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(RelaxPRM, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

RelaxPRM.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  RelaxDeepBreathTable,
  RelaxGuidedImagery,
  RelaxPRM,
};


/*
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_products",
>>>>>>> 330508ef8358635e038698e7fe4344e6ddbb983e
});

module.exports = {
  sequelize,
  ...models,
};
