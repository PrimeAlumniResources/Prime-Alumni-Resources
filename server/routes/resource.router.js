const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
});


router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body, req.user.id);
});

module.exports = router;
