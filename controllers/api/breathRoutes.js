const router = require("express").Router();
const { RelaxDeepBreathTable } = require("../../models");
const withAuth = require("../../utils/auth");

//add a record to the deep breath table with the entries from the request
router.post("/", withAuth, async (req, res) => {
  try {
    const breathData = await RelaxDeepBreathTable.create({
      relax_deep_breath_name: req.body.breath_name,
      relax_deep_breath_description: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(breathData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
