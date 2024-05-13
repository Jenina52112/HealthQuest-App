const { Journal } = require("../models");

// Controller for journal CRUD operations
const journalController = {
  getAllJournals: async (req, res, next) => {
    try {
      const journals = await Journal.findAll();
      res.json(journals);
    } catch (error) {
      next(error);
    }
  },

  getJournalById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const journal = await Journal.findByPk(id);
      if (journal) {
        res.json(journal);
      } else {
        res.status(404).send("Journal not found");
      }
    } catch (error) {
      next(error);
    }
  },

  createJournal: async (req, res, next) => {
    const { title, content } = req.body;
    try {
      const newJournal = await Journal.create({ title, content });
      res.json(newJournal);
    } catch (error) {
      next(error);
    }
  },

  deleteJournal: async (req, res, next) => {
    const id = req.params.id;
    try {
      await Journal.destroy({ where: { id: id } });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = journalController;
