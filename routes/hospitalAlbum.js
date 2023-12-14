const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');

router.get('/', async (req, res) => {
  const hospitals = await Hospital.find();
  res.render('hospitalAlbum', { hospitals });
});

module.exports = router;
