const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.put('/', rejectUnauthenticated, (req,res) => {
    
    const user= req.user.id
    
    const pronouns = req.body.pronouns
    const bio = req.body.bio
    const tech= req.body.tech
    const socials= req.body.socials
    const jobTitle = req.body.jobTitle

    const sqlText = `
    UPDATE user
    SET "pronouns" = $1,
        "bio" = $2
        "tech" = $3
        "socials" = $4
        "job_title" = $5
        WHERE id= $6
    `
    const sqlValues = [pronouns,bio,tech,socials,jobTitle,user]
    console.log('these are the sqlValues-->',sqlValues);
    pool.query(sqlText,sqlValues)
    .then((results)=> {
        res.sendStatus(200)
    }).catch ((error) => {
        console.log('error in profile put route---> ',error);
        res.sendStatus(500)
    })
})

router.get('/all', rejectUnauthenticated, (req, res) => {
    const sqlText = `SELECT "user".id, first_name || ' ' || last_name as profile_name, pronouns, 
    job_title, cohort.name as cohort_name, campus.name as campus_name
    FROM "user" 
    JOIN "cohort" on cohort.id="user".ccohort_id 
    JOIN campus on cohort.campus_id=campus.id;
    `

    pool.query(sqlText)
    .then((results)=> {
        console.log(results.rows)
        res.send(results.rows);
    }).catch (error => {
        console.log('error in all profile server get route:', error)
        res.sendStatus(500);
    })
})

router.get('/', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id

    const sqlText = `
    SELECT 
    pronouns, bio, tech, socials, job_title
    FROM user
    WHERE id = $1
    `
    const sqlValue = [userId]
    pool.query(sqlText, sqlValue)
    .then((results) => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('error in profile server get route:', error);
        res.sendStatus(500)
    })
})

 

module.exports = router