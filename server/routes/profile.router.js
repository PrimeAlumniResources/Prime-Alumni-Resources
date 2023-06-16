const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.put('/', rejectUnauthenticated, (req,res) => {
    
    const user= req.user.id
    
    const pronouns = req.body.pronouns
    const bio = req.body.bio
    const firstName = req.body.firstName
    const github= req.body.github
    const lastName = req.body.lastName
    const currentWork = req.body.currentWork
    const linkedIn = req.body.linkedIn
    const portfolio = req.body.portfolio
    const position = req.body.position
    const startDate = req.body.startDate
    const uploadedFile = req.body.uploadedFile
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
        "github" = $11
        WHERE id= $12
    `
    const sqlValues = [username,bio,firstName,lastName,pronouns,position,startDate,portfolio,uploadedFile,linkedIn,github,user]
    console.log('these are the sqlValues-->',sqlValues);
    pool.query(sqlText,sqlValues)
    .then((results)=> {
        res.sendStatus(200)
    }).catch ((error) => {
        console.log('error in profile put route---> ',error);
        res.sendStatus(500)
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
        res.sendStatus(200)
    }).catch((error) => {
        console.log('error in profile server get route:', error);
        res.sendStatus(500)
    })
})

 

module.exports = router