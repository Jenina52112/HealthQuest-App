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
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
*/
