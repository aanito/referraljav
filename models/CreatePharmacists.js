const mongoose = require('mongoose');
const Pharmacist = require('./pharmacist.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const pharmacist = new Pharmacist({
  Name: process.argv[2],
  Specialty: process.argv[3],
  Telephone: process.argv[4],
  Email: process.argv[5],
  In_person_contact_hours: process.argv[6],
  Online_contact_hours: process.argv[7]
});

pharmacist.save()
  .then(() => {
    console.log('Pharmacist saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
