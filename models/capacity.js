const mongoose = require('mongoose');

const capacitySchema = new mongoose.Schema({
  "In-patient Beds": {
    type: Number,
    required: true,
    description: "Number of in-patient beds available"
  },
  "Free Beds available": {
    type: Number,
    required: true,
    description: "Number of free beds available"
  },
  "Total out-patient clinics": {
    type: Number,
    required: true,
    description: "Total number of out-patient clinics"
  }
});


module.exports = mongoose.model('Capacity', capacitySchema);
