const mongoose = require("mongoose");

// Define the database schema for the album collection
const imageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
    // required: true,
  }
  
  // Other fields for the album
});

// Create the model for the album collection
const Image = mongoose.model("Image", imageSchema);

// Export the model
module.exports = Image;
