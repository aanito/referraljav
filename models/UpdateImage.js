const mongoose = require('mongoose');
const fs = require('fs');
const Hospital = require('./hospital.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    const hospitalName = process.argv[2];
    const imagePath = process.argv[3];
    const contentType = 'image/jpg';

    Hospital.findOne({ Name: hospitalName })
        .then((hospital) => {
            hospital.Image.data = fs.readFileSync(imagePath);
            hospital.Image.contentType = contentType;
            return hospital.save();
        })
        .then(() => {
            console.log('Image replaced successfully');
        })
        .catch((err) => {
            console.log(err);
        });
  })
  .catch((err) => {
    console.log(err);
});
