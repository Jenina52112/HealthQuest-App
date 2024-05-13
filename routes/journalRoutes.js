const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController");

// Journal routes
router.get("/", journalController.getAllJournals);
router.get("/:id", journalController.getJournalById);
router.post("/", journalController.createJournal);
router.delete("/:id", journalController.deleteJournal);

module.exports = router;
