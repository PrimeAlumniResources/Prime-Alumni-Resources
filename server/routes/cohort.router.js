
const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router();

router.get('/all',  (req, res) => {
    
    pool.query(`
    SELECT id,name FROM "cohort";
    `)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('error in cohort server get route:', error);
        res.sendStatus(500)
    })
})

router.get('/my',  (req, res) => {
    const cohort_id =req.user.cohort_id
    const sqlText = `
    SELECT  "cohort".id AS cohort_id, "cohort".name ,"cohort".start_date , "cohort".end_date,
    "cohort".end_date 
    FROM  "cohort"
    JOIN "user"
    on "cohort".id = $1
    ;
    `
    const sqlValue = [cohort_id]
    console.log('this is sqlValues in get my cohort-->',sqlValue);
    pool.query(sqlText,sqlValue)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('error in cohort server get route:', error);
        res.sendStatus(500)
    })
})


module.exports = router