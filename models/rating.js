const mongoose = require('mongoose');

// Defining the schema 
const ratingSchema = new mongoose.Schema({
    // hospitalId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Hospital'
    // },
    rating: { 
        type: Number, 
        required: true 
    },
    customerName: {
        type: String,
        required: true
    },
    comment: {
        type: String
  }
});

// Create an export model for the ratings collection
module.exports = mongoose.model('Rating', ratingSchema);