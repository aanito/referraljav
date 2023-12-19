const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Services = require('../models/services');

// Home page
router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find().exec();
    const services = await Services.find().exec();

    res.render('index', { hospitals, services });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Search route
router.post('/search', async (req, res) => {
  const searchQuery = req.body.searchQuery;

  try {
    const hospitals = await Hospital.find({ Name: { $regex: searchQuery, $options: 'i' } }).exec();
    const services = await Services.find({
      $or: [
        { Primary_care: { $regex: searchQuery, $options: 'i' } },
        { Specialty_care: { $regex: searchQuery, $options: 'i' } },
      ],
    }).exec();

    res.send({ hospitals: hospitals, services: services });
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
