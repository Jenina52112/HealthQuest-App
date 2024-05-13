// User model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // Define user attributes (e.g., username, password)
    },
    {}
  );

  // Define associations or additional methods if needed
  return User;
};
