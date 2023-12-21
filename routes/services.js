const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Services = require('../models/services');

router.get('/', async (req, res) => {
  const primary = await Services.find({ Primary_care: { $exists: true } }).populate('hospitalId');
  const specialty = await Services.find({ Specialty_care: { $exists: true } }).populate('hospitalId');

  res.render('services', { primary, specialty });
});

module.exports = router;
