const express = require("express");
const pool = require("../modules/pool");
const {rejectUnauthenticated} = require("../modules/authentication-middleware");

const router = express.Router();

// POST ROUTE
router.post('/', rejectUnauthenticated, (req, res) => {
  const user = req.body;


  const company = req.body.company;
  const link = req.body.link;
  const position = req.body.position;  
  const created_at = req.body.timestamp;
  const userId = req.user.id;

  console.log("User:", user);  

  const sqlText = `
  INSERT INTO "job"
  ("company", "link", "position", "created_at", "user_id")
  VALUES
  ($1, $2, $3, $4, $5);
  `;
  
  const sqlValues = [company, link, position, created_at, userId]

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error posting to db", dbErr);
      res.sendStatus(500);
    });
});

// GET ROUTE
router.get("/", rejectUnauthenticated, (req, res) => {

  const sqlText = `
  SELECT 
  company, link, position, created_at
  FROM "job"
  ORDER BY id DESC;
  `;

  pool
    .query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
      // console.log('DBRES:', dbRes.rows); WORKS
    })
    .catch((dbErr) => {
      console.log("GET dbRes fail:", dbErr);
    });
});

module.exports = router
