const mongoose = require('mongoose');

const pharmacistSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Specialty: {
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
  },
  Image: {
    data: Buffer,
    contentType: {
      type: String,
      default: contentType
    }
  }
});

module.exports = mongoose.model('Pharmacist', pharmacistSchema);
