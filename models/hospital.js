const mongoose = require('mongoose');
const laboratoryTechnologist = require('./laboratoryTechnologist');

const hospitalSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
    description: "must be a reference to another document and is required"
  },
  Location: {
    type: String,
    required: true
  },
  Services: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Services',
    required: true,
    description: "must be a reference to another document and is required"
  },
  Doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
    description: "must be a reference to another document and is required"
  },
  LaboratoryTechnologist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LaboratoryTechnologist',
    required: true,
    description: "must be a reference to another document and is required"
  },
  Pharmacist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pharmacist',
    required: true,
    description: "must be a reference to another document and is required"
  },
  Capacity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Capacity',
    required: true,
    description: "Capacity information for the hospital"
  },
  Images: {
    type: [String],
    required: false
  },
  Contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact',
    required: true,
    description: "must be a reference to another document and is required"
  }
});


// module.exports = {
//   Hospital: mongoose.model('Hospital', hospitalSchema)
// };


module.exports = mongoose.model('Hospital', hospitalSchema);
