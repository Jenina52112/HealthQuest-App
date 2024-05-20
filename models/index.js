// import models
const User = require("./user");
const RelaxDeepBreathTable = require("./Relax-deep-breath");
const RelaxGuidedImagery = require("./RelaxGuidedImagery");
const RelaxPRM = require("./Relax.PRM");
const Benefit = require("./Benefits");

// one to many relationship between user and deep breath entries
User.hasMany(RelaxDeepBreathTable, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

RelaxDeepBreathTable.belongsTo(User, {
  foreignKey: "user_id",
});

// one to many relationship between user and Relax Guided Imagery data
User.hasMany(RelaxGuidedImagery, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

RelaxGuidedImagery.belongsTo(User, {
  foreignKey: "user_id",
});

// one to many relationship between user and Relax PRM data
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
