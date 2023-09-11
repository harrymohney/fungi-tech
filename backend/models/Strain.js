const mongoose = require('mongoose');

const strainSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  url: String
});

module.exports = mongoose.model('Strain', strainSchema);
