const Culture = require('../models/Culture');

async function getAllCultures(req, res) {
  try {
    const cultures = await Culture.find();
    res.json(cultures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createCulture(req, res) {
  try {
    const newCulture = await Culture.create(req.body);
    res.status(201).json(newCulture);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateCulture(req, res) {
  try {
    const updatedCulture = await Culture.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCulture);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteCulture(req, res) {
  try {
    await Culture.findByIdAndRemove(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllCultures,
  createCulture,
  updateCulture,
  deleteCulture,
};
