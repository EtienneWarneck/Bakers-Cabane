const express = require('express');
const router = express.Router();

// Import the model (pastry.js) to use its database functions.
const pastry = require('../models/pastry.js');

router.get("/", function (req, res) {

    console.log("CONTROLLER root route")

    pastry.all(function (data) { // = orm.SelectAll()
        // var hbsObject = { pastries: data };
        // console.log(data);

        res.render('index', { //passing to index.handlebar
            pastry: data,    //
            // pageTitle: 'index', //
            // pastriesStyleCSS: true
        });
    });
});

router.post("/api/pastry", function (req, res) {

    console.log("CONTROLLER POST api/pastry route");

    pastry.create(["pastry_name", "devoured"], [req.body.pastry_name, req.body.devoured], function (result) {
        // (["column DB", "column DB"] , [valueEnteredByUser, ] 

        res.json({ id: result.insertId });  // creates an ID to match result
        console.log("CONTROLLER POST");
        //Sends a JSON response. This express method sends a response
        //that is the parameter converted to a JSON string using JSON.stringify
        //JSON.stringify converts a JavaScript object or value to a JSON string,

    });
});

router.put("/api/pastry/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    // console.log("condition", condition);
    pastry.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;
