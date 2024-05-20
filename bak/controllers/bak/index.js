const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const breathRoutes = require("./breathRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/breaths", breathRoutes);

module.exports = router;
