const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `SELECT * FROM "resource" ORDER BY "id" DESC;`

    pool.query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('GET/ resource from database fail:', dbErr);
      res.sendStatus(500);
    })
   
});

router.get('/resourceTags', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `SELECT "tag" FROM "resource" GROUP BY "tag";`

  pool.query(sqlQuery)
  .then((dbRes) => {
    res.send(dbRes.rows);
  })
  .catch((dbErr) => {
    console.log('GET/ tags from resource from database fail:', dbErr);
    res.sendStatus(500);
  })
 
});


router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body, req.user.id);
  const title = req.body.title
  const link = req.body.link
  const description = req.body.description
  const tag = req.body.tag
  const userId = req.user.id
  console.log(title, link, description, tag, userId);
 
  const sqlQuery = `
  INSERT INTO "resource" 
  ("title", "link", "description", "tag", "user_id")
  VALUES ($1, $2, $3, $4, $5);
  `;
 const sqlValues = [title, link, description, tag, userId];
 
 pool.query(sqlQuery, sqlValues)
 .then((dbRes) => {
   res.sendStatus(201);
 })
 .catch((dbErr) => {
   console.log('POST/ resource to database fail:', dbErr);
   res.sendStatus(500);
 })

});

module.exports = router;
