const express = require('express');
const router = express.Router();
// Line 4 and 5 are different ways to accomplish the same thing. ES6 syntax "{ data }" is simply more concise than writing "data = require(../data/flashcardData.json).data"
const { data } = require('../data/flashcardData.json');
const cards = data.cards;

router.get('/:id', (req, res) => {
  res.render('card', {
    prompt: cards[req.params.id].question,
    hint: cards[req.params.id].hint
      });
  });

  module.exports = router;