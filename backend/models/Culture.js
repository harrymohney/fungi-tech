const mongoose = require('mongoose');

const cultureSchema = new mongoose.Schema({
  StrainID: { type: mongoose.Schema.Types.ObjectId, ref: 'Strain' },
  InoculationDate: Date,
  TransferDate: Date,
  CultureType: String,
});

module.exports = mongoose.model('Culture', cultureSchema);
