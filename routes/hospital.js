const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const Category = require('../models/category');
const Doctor = require('../models/doctor');
const Services = require('../models/services');
const Rating = require('../models/rating');
const Contact = require('../models/contact');

router.get('/:id', async (req, res) => {
  const hospital = await Hospital.findById(req.params.id)
    .populate('Doctor')
    .populate('Category')
    .populate('Services')
    .populate('Contact');

  if (!hospital) {
    return res.status(404).send('Hospital not found');
  }

  const ratings = await Rating.find({ hospitalId: hospital._id });

  res.render('hospital', { hospital, ratings });
});

router.post('/:id/rating', async (req, res) => {
  const hospitalId = req.params.id;
  const ratingValue = req.body.rating;
  const customerName = req.body.customerName;
  const comment = req.body.comment;

  const rating = new Rating({
    hospitalId: hospitalId,
    rating: ratingValue,
    customerName: customerName,
    comment: comment
  });

  await rating.save();

  res.redirect(`/hospital/${hospitalId}`);
});

module.exports = router;

