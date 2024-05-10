// import models
const User = require("./user");
const TestTable = require("./testTable");

User.hasMany(TestTable, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

TestTable.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = {
  User,
  TestTable,
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
