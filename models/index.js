// import models
const User = require("./user");
const TestTable = require("./testTable");
const RelaxDeepBreath = require("./Relax-deep-breath");
const RelaxGuidedImagery = require("./RelaxGuidedImagery");
const RelaxPRM = require("./Relax.PRM");

User.hasMany(TestTable, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

TestTable.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(RelaxDeepBreath, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

RelaxDeepBreath.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(RelaxGuidedImagery, {
})

RelaxGuidedImagery.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(RelaxPRM, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

RelaxPRM.belongsTo(User, {
})

module.exports = {
  User,
  TestTable,
  RelaxDeepBreath,
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
