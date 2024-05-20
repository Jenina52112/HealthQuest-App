const router = require("express").Router();
const { User, TestTable } = require("../models");
const withAuth = require("../utils/auth");

/*router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const testData = await TestTable.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const tests = testData.map((test) => test.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      //logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
