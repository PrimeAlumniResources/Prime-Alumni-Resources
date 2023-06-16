const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.post('/known', rejectUnauthenticated, (req,res) => {
    
    const user= req.user.id
    
    const name = req.body.name
  
    console.log('this is known name',name);

    const sqlText = `
    INSERT INTO "known_stack" (name,user_id)
    VALUES ($1,$2)
    `
    const sqlValues = [name,user]
    console.log('these are the sqlValues-->',sqlValues);
    pool.query(sqlText,sqlValues)
    .then((results)=> {
        res.sendStatus(200)
    }).catch ((error) => {
        console.log('error in tech post route---> ',error);
        res.sendStatus(500)
    })
})

router.post('/current', rejectUnauthenticated, (req,res) => {
    
    const user= req.user.id
    
    const name =req.body.name

    const sqlText = `
    INSERT INTO "current_stack" (name,user_id)
    VALUES ($1,$2)
    `
    const sqlValues = [name,user]
    console.log('these are the sqlValues-->',sqlValues);
    pool.query(sqlText,sqlValues)
    .then((results)=> {
        res.sendStatus(200)
    }).catch ((error) => {
        console.log('error in current post route---> ',error);
        res.sendStatus(500)
    })
})

router.get('/current', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id

    const sqlText = `
            
    SELECT * FROM "current_stack"
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

router.delete('/deletecurrent/:name', rejectUnauthenticated, (req, res) => {
    
    const name = req.params.name
    const userId = req.user.id
    const queryText = `
        DELETE FROM "current_stack"
        WHERE name =$1
         AND user_id=$2;
        `;
    const queryValues = [name, userId]
    console.log('this is query values-->', queryValues);

    pool.query(queryText, queryValues).
        then(results => {
            res.sendStatus(200)
        }).catch(error => {
            console.log('error in the delete router in tech routes', error);
        })
})

router.delete('/deleteknown/:name', rejectUnauthenticated, (req, res) => {
    
    const name = req.params.name
    const userId = req.user.id
    const queryText = `
        DELETE FROM "known_stack"
        WHERE name =$1
         AND user_id=$2;
        `;
    const queryValues = [name, userId]
    console.log('this is query values-->', queryValues);

    pool.query(queryText, queryValues).
        then(results => {
            res.sendStatus(200)
        }).catch(error => {
            console.log('error in the delete router in tech routes', error);
        })
})


module.exports = router