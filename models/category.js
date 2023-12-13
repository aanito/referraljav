const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  Name: {
    type: String,
    enum: ["Primary", "Secondary", "Tertiary"],
    required: true,
    description: "must be one of the following values: 'Primary', 'Secondary' or 'Tertiary'"
  }
});

module.exports = mongoose.model('Category', categorySchema);
