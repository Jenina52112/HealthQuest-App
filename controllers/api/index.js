const router = require("express").Router();
const userRoutes = require("./userRoutes");
const breathRoutes = require("./breathRoutes");

router.use("/users", userRoutes);
router.use("/breaths", breathRoutes);

module.exports = router;
