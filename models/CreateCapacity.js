const mongoose = require('mongoose');
const Capacity = require('./capacity.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const capacity = new Capacity({
  "In-patient Beds": process.argv[2],
  "Free Beds available": process.argv[3],
  "Total out-patient clinics": process.argv[4]
});

capacity.save()
  .then(() => {
    console.log('Capacity saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
