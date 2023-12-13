const mongoose = require('mongoose');
const Services = require('./services.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const services = new Services({
  Primary_care: process.argv[2].split(','),
  Specialty_care: process.argv[3].split(',')
});

services.save()
  .then(() => {
    console.log('Services saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
