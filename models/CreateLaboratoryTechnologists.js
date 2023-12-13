const mongoose = require('mongoose');
const LaboratoryTechnologist = require('./laboratoryTechnologist.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const laboratoryTechnologist = new LaboratoryTechnologist({
  Name: process.argv[2],
  Telephone: process.argv[3],
  Email: process.argv[4],
  In_person_contact_hours: process.argv[5],
  Online_contact_hours: process.argv[6]
});

laboratoryTechnologist.save()
  .then(() => {
    console.log('Laboratory Technologist saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
