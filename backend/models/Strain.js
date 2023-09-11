const mongoose = require('mongoose');

const strainSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: URL,
});

module.exports = mongoose.model('Strain', strainSchema);
