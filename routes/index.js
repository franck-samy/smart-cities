const express = require('express');
const router = express.Router();
const app = require('../app');
//const registerRouters = require('./register.router');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
