// import models
const User = require("./user");
const RelaxDeepBreathTable = require("./Relax-deep-breath");
const RelaxGuidedImagery = require("./RelaxGuidedImagery");
const RelaxPRM = require("./Relax.PRM");
const Benefit = require("./Benefits");

//set the one to many relationships between user and the other tables
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
  Benefit,
};
