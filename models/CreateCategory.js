const mongoose = require('mongoose');
const Category = require('./category.js');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const category = new Category({
  Name: process.argv[2]
});

category.save()
  .then(() => {
    console.log('Category saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
