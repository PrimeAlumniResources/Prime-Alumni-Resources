
const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router();

router.get('/',  (req, res) => {
    
    const sqlText = `
   
    `
    
    pool.query(`
    SELECT id,name FROM  "cohort";
    `)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('error in cohort server get route:', error);
        res.sendStatus(500)
    })
})


module.exports = router