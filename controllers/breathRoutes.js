const router = require("express").Router();
const { RelaxDeepBreathTable, User } = require("../models");

const withAuth = require("../utils/auth");

//find all deep breath record while validating if user is logged in include the relationship with user
router.get("/", withAuth, async (req, res) => {
  try {
    const breathData = await RelaxDeepBreathTable.findAll({
      attributes: [
        "id",
        "user_id",
        "relax_deep_breath_name",
        "relax_deep_breath_description",
        "relax_deep_breath_duration",
      ],
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
      ],
    });

    //add the json object to pull the data into the page
    const breaths = breathData.map((breath) => breath.get({ plain: true }));
    res.render("breaths", { breaths, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
