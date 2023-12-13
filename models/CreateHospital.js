const mongoose = require('mongoose');
const Hospital = require('./hospital.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const hospital = new Hospital({
  Name: process.argv[2],
  Category: process.argv[3],
  Location: process.argv[4],
  Services: process.argv[5],
  Doctor: process.argv[6],
  LaboratoryTechnologist: process.argv[7],
  Pharmacist: process.argv[8],
  Capacity: process.argv[9],
  Images: process.argv[10],
  Contact: process.argv[11]
});

hospital.save()
  .then(() => {
    console.log('Hospital saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });