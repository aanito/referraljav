const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');

router.get('/', async (req, res) => {
  const hospitals = await Hospital.find();

  // Add latitude and longitude for each hospital.
  for (let hospital of hospitals) {
    const location = await Hospital.findOne({ Name: hospital.Name }, { Latitude: 1, Longitude: 1, _id: 0 });
    if (location) {
      hospital.Latitude = location.Latitude;
      hospital.Longitude = location.Longitude;
    } else {
      console.log(`Unable to find location for hospital ${hospital ? hospital.Name : 'undefined'}`);
    }
  }

  res.render('hospitalAlbum', { hospitals });

  router.get('/search', async (req, res) => {
    const query = req.query.q;
    const hospitals = await Hospital.find({ Name: { $regex: query, $options: 'i' } });
  
    // Add latitude and longitude for each hospital.
    for (let hospital of hospitals) {
      const location = await Hospital.findOne({ Name: hospital.Name }, { Latitude: 1, Longitude: 1, _id: 0 });
      if (location) {
        hospital.Latitude = location.Latitude;
        hospital.Longitude = location.Longitude;
      } else {
        console.log(`Unable to find location for hospital ${hospital ? hospital.Name : 'undefined'}`);
      }
    }
  
    res.render('hospitalAlbum', { hospitals });
  });

});

module.exports = router;
