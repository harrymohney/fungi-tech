const Strain = require('../models/Strain');

async function createStrain(req, res) {
  try {
    const newStrain = await Strain.create(req.body);
    res.status(201).json(newStrain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllStrains(req, res) {
  try {
    const strains = await Strain.find();
    res.json(strains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getStrainById(req, res) {
  try {
    const strain = await Strain.findById(req.params.id);
    if (!strain) {
      res.status(404).json({ error: 'Strain not found' });
      return;
    }
    res.json(strain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateStrainById(req, res) {
  try {
    const updatedStrain = await Strain.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStrain) {
      res.status(404).json({ error: 'Strain not found' });
      return;
    }
    res.json(updatedStrain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteStrainById(req, res) {
  try {
    const deletedStrain = await Strain.findByIdAndDelete(req.params.id);
    if (!deletedStrain) {
      res.status(404).json({ error: 'Strain not found' });
      return;
    }
    res.json(deletedStrain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createStrain,
  getAllStrains,
  getStrainById,
  updateStrainById,
  deleteStrainById,
};
