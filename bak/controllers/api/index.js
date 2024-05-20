//get the location for for the user routes and the breath routes for the  MySQL database
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const breathRoutes = require("./breathRoutes");
const benefitsRoutes = require("./benefitsRoutes");
//create the routes for the GET and POST methods
router.use("/users", userRoutes);
router.use("/breaths", breathRoutes);
router.use("/benefits", benefitsRoutes);
module.exports = router;
