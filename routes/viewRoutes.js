const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");

// View routes
router.get("/login", viewController.loginPage);
router.get("/register", viewController.registerPage);
router.get("/journal", viewController.journalPage);

module.exports = router;
