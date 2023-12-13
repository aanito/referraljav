const mongoose = require('mongoose');
const Image = require('./image.js');
const fs = require('fs');

mongoose.connect('mongodb://localhost:27017/referral_dbase', { useNewUrlParser: true, useUnifiedTopology: true });

const path = process.argv[2];
const contentType = 'image/jpeg'; // replace with the actual content type of your image
const data = fs.readFileSync(path).toString('base64');

const image = new Image({
  img: {
    data: data,
    contentType: contentType
  }
});

image.save()
  .then(() => {
    console.log('Image saved successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
