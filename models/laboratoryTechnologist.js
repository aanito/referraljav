const mongoose = require('mongoose');

const laboratoryTechnologistSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Telephone: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  In_person_contact_hours: {
    type: String,
    // required: true
  },
  Online_contact_hours: {
    type: String,
    // required: true
  }
});

module.exports = mongoose.model('LaboratoryTechnologist', laboratoryTechnologistSchema);
