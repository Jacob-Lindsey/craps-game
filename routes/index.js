var express = require('express');
var router = express.Router();

const bets = require('../public/javascripts/bets');

router.get('/passLine', async function(req, res, next) {
  let data;
  try {
    data = await bets.passLine('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

// PLACE BETS

router.get('/place', async function(req, res, next) {
  let data;
  try {
    data = await bets.place('Jake', 5, 10);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

// FIELD BET

router.get('/field', async function(req, res, next) {
  let data;
  try {
    data = await bets.field('Jake', 5, 12);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

// ONE TIME BETS

router.get('/any7', async function(req, res, next) {
  let data;
  try {
    data = await bets.any7('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

router.get('/anyCraps', async function(req, res, next) {
  let data;
  try {
    data = await bets.anyCraps('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

router.get('/craps2or12', async function(req, res, next) {
  let data;
  try {
    data = await bets.craps2or12('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

router.get('/craps3or11', async function(req, res, next) {
  let data;
  try {
    data = await bets.craps3or11('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

router.get('/horn2or12', async function(req, res, next) {
  let data;
  try {
    data = await bets.horn2or12('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

router.get('/horn3or11', async function(req, res, next) {
  let data;
  try {
    data = await bets.horn3or11('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

router.get('/big6or8', async function(req, res, next) {
  let data;
  try {
    data = await bets.big6or8('Jake', 5);
    res.status(200).json({ data: data });
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;
