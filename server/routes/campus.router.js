const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    sqlText = `SELECT * FROM campus`

    pool.query(sqlText)
    .then((results) => {
        res.send(results.rows)
    })
    .catch(error => {
        console.log('error in all campuses get route-->', error)
        res.sendStatus(500)
    })
})

module.exports = router;