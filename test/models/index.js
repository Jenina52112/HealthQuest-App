// import models
const User = require("./user");
const TestTable = require("./testTable");

User.hasMany(TestTable, {
  foreignKey: "user_id",
});

TestTable.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
module.exports = {
  User,
  TestTable,
};
