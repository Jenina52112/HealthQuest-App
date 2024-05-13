const path = require("path");

// Controller for rendering views
const viewController = {
  loginPage: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "auth", "login.hbs"));
  },

  registerPage: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "auth", "register.hbs"));
  },

  journalPage: (req, res) => {
    res.sendFile(
      path.join(__dirname, "..", "views", "journal", "journalList.hbs")
    );
  },
};

module.exports = viewController;
