const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log("Got a GET request at /items");
    
    const sqlQueryText = `
    SELECT * FROM "shoppinglist"
        ORDER BY "name";`;

    pool.query(sqlQueryText)
    .then((result) => {
        console.log("We got the stuff!");
        res.send(result.rows);
    }).catch((error) => {
        console.log("Error in GET:", error);
        res.sendStatus(500);
    })
    
})

module.exports = router;