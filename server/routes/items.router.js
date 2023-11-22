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

router.post('/', (req, res) => {
    console.log("Got a POST request at /items");
    let item = req.body;

    const sqlQueryText = `
    INSERT INTO "shoppinglist" ("name", "quantity", "unit")
        VALUES ($1, $2, $3);`;
    
    const sqlValues = [item.name, item.quantity, item.unit];

    pool.query(sqlQueryText, sqlValues)
    .then((result) => {
        console.log("Success! PUT a new item");
        res.sendStatus(201);
    }).catch((error) => {
        console.log("Oh naur! Couldn't PUT new item:", error);
        res.sendStatus(500);
    })
})

router.delete('/', (req, res) => {
    const sqlQueryText = `DELETE FROM "shoppinglist";`

    pool.query(sqlQueryText)
    .then((result) => {
        console.log("Cleared entire shopping list");
        res.sendStatus(201);
    }).catch((error) => {
        console.log("ERROR in delete at /items:", error);
        res.sendStatus(500);
    })
})



module.exports = router;