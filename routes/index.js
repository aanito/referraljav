// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// // Home page
// router.get('/', (req, res) => {
//   res.render('index');
// });

// const collection = mongoose.connection.collection('hospitals');

// router.get('/search', (req, res) => {
//   const query = req.query.q;
//   collection.find({ name: { $regex: query, $options: 'i' } }).toArray((err, result) => {
//     if (err) throw err;
//     res.render('search', { results: result });
//   });
// });

// module.exports = router;
