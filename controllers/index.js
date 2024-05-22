const router = require("express").Router();

//locations for the routes
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const breathRoutes = require("./breathRoutes");

//create the routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/breaths", breathRoutes);

module.exports = router;
