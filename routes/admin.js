const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Services = require('../models/services');

router.get('/', async (req, res) => {
  try {
    // Fetch categories from the database
    // const categories = await Category.find().lean();
    const services = await Services.findOne({}).lean();

    res.render('admin', { services });
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;