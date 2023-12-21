const mongoose = require('mongoose');
const Services = require('./services');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const services = new Services({
  hospitalId: process.argv[2],
  Primary_care: process.argv[3].split(','),
  Specialty_care: process.argv[4].split(',')
});

services.save()
  .then(() => {
    console.log('Service created successfully');
  })
  .catch((err) => {
    console.log(err);
  });
