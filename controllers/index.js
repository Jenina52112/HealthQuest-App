//find the route file locations and create the routes
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const breathRoutes = require("./breathRoutes");
const benefitsRoutes = require("../controllers/api/benefitsRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/breaths", breathRoutes);
router.use("/benefits", benefitsRoutes);
module.exports = router;
