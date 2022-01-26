const express = require('express');
const router = express.Router();
// Line 4 and 5 are different ways to accomplish the same thing. ES6 syntax "{ data }" is simply more concise than writing "data = require(../data/flashcardData.json).data"
const { data } = require('../data/flashcardData.json');
const cards = data.cards;

router.get('/', ( req, res ) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor( Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardId}?side=question`)
});

router.get('/:id', (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];

  const templateData = { id, text };

  if (side === 'question'){
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer';
  } else if ( side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
  }

  res.render('card', templateData);
  });

  module.exports = router;