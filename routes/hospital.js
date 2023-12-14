const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');

router.get('/:id', async (req, res) => {
    const hospital = await Hospital.findById(req.params.id);
  
    if (!hospital) {
      return res.status(404).send('Hospital not found');
    }
  
    res.render('hospital', { hospital });
  });
  

module.exports = router;
