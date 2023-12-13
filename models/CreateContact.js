const mongoose = require('mongoose');
const Contact = require('./contact.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const contact = new Contact({
  Name: process.argv[2],
  Telephone: process.argv[3],
  Email: process.argv[4]
});

contact.save()
  .then(() => {
    console.log('Contact saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
