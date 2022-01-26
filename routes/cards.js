const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('card', {prompt: 'What is the question?'});
  });

  module.exports = router;