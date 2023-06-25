const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.put('/', rejectUnauthenticated, (req,res) => {
    
    const user= req.user.id
    
    const pronouns = req.body.pronouns
    const bio = req.body.bio
    const firstName = req.body.first_name
    const github= req.body.github
    const lastName = req.body.last_name
    const currentWork = req.body.current_work
    const linkedIn = req.body.linked_in
    const portfolio = req.body.portfolio_url
    const position = req.body.position
    const startDate = req.body.start_date
    const uploadedFile = req.body.uploaded_file
    const username = req.body.username

    const sqlText = `
    UPDATE "user"
    SET "username" = $1,
        "bio" = $2,
        "first_name" = $3,
        "last_name" = $4,
        "pronouns" = $5,
        "position" = $6,
        "start_date" = $7,
        "portfolio_url" = $8,
        "uploaded_file" = $9,
        "linked_in" = $10,
        "github" = $11,
        "current_work" =$12
        WHERE id= $13
    `
    const sqlValues = [username,bio,firstName,lastName,pronouns,position,startDate,portfolio,uploadedFile,linkedIn,github,currentWork,user]
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
    const sqlText = `SELECT "user".id, username, first_name || ' ' || last_name as profile_name, pronouns, 
    position, current_work as company, cohort.name as cohort_name, campus.name as campus_name
    FROM "user" 
    JOIN "cohort" on cohort.id="user".cohort_id 
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
            
    SELECT * FROM "user"
    WHERE id= $1;
    `
    const sqlValue = [userId]
    pool.query(sqlText, sqlValue)
    .then((results) => {
        res.send(results.rows[0])
    }).catch((error) => {
        console.log('error in profile server get route:', error);
        res.sendStatus(500)
    })
})

router.get('/:username', rejectUnauthenticated, (req, res) => {
    const username = req.params.username;
    console.log(username)
    const sqlText = `SELECT username, first_name, last_name, pronouns, bio, current_work, position, "user".start_date, portfolio_url, github, linked_in, uploaded_file, cohort.name as cohort_name, cohort.start_date as cohort_start_date, cohort.end_date as cohort_end_date  FROM "user" 
                        JOIN cohort ON "user".cohort_id=cohort.id
                        WHERE username = $1;`

    const sqlValues = [username];

    pool.query(sqlText, sqlValues)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        console.log('error in specific profile get route', error)
    })
});

// router.get('/specific',  (req, res) => {
//     console.log('this is req.body-->',req.body.username);
//     const username = req.query.username

//     const sqlText = `
            
//     SELECT uploaded_file FROM "user"
//     WHERE username= $1;
//     `
//     const sqlValue = [username]
//     console.log('this is the sql values-->',sqlValue);
//     pool.query(sqlText, sqlValue)
//     .then((results) => {
//         console.log('this is the results', results.rows);
//         res.send(results.rows[0])
//     }).catch((error) => {
//         console.log('error in specific profile server get route:', error);
//         res.sendStatus(500)
//     })
// })

 

module.exports = router