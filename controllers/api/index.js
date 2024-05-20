const router = require("express").Router();
const userRoutes = require("./userRoutes");
const breathRoutes = require("./breathRoutes");
const benefitsRoutes = require("./benefitsRoutes")
router.use("/users", userRoutes);
router.use("/breaths", breathRoutes);
router.use("/benefits", benefitsRoutes)
module.exports = router;
