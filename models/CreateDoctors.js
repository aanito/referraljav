const mongoose = require('mongoose');
const Doctor = require('./doctor.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const doctor = new Doctor({
  Name: process.argv[2],
  Specialty: process.argv[3],
  Telephone: process.argv[4],
  Email: process.argv[5],
  In_person_contact_hours: process.argv[6],
  Online_contact_hours: process.argv[7]
});

doctor.save()
  .then(() => {
    console.log('Doctor saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
