const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Category = require('../models/category');
const Doctor = require('../models/doctor');
const Services = require('../models/services');

router.get('/:id', async (req, res) => {
    const hospital = await Hospital.findById(req.params.id)
        .populate('Doctor')
        .populate('Category')
        .populate('Services');
  
    if (!hospital) {
      return res.status(404).send('Hospital not found');
    }
  
    res.render('hospital', { hospital });
});

module.exports = router;
