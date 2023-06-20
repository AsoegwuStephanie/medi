const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  diagnosis: String,
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
});

module.exports = mongoose.model('Patient', patientSchema);
