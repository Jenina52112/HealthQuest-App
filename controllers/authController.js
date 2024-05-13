const bcrypt = require("bcrypt");
const { User } = require("../models");

// Controller for user authentication
const authController = {
  login: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username: username } });
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user; // Setting user session
        res.json({ success: true });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid username or password" });
      }
    } catch (error) {
      next(error);
    }
  },

  register: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username: username } });
      if (user) {
        res
          .status(400)
          .json({ success: false, message: "Username already exists" });
      } else {
        const hashedPassword = bcrypt.hashSync(password, 10);
        await User.create({ username: username, password: hashedPassword });
        res.json({ success: true });
      }
    } catch (error) {
      next(error);
    }
  },

  logout: (req, res) => {
    req.session.destroy(); // Destroying user session on logout
    res.redirect("/");
  },
};

module.exports = authController;
