const mongoose = require('mongoose');

const strainSchema = new mongoose.Schema({
  StrainName: String,
  MedicinalBenefits: String,
  ExpirationDate: Date,
});

module.exports = mongoose.model('Strain', strainSchema);
