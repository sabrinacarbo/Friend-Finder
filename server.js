// Dependencies
// =============================================================
var bodyParser = require("body-parser");
var request = require("request");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var express = require("express");
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Friend Base (DATA)
// =============================================================
var Friends = [{
        "name": "Tom",
        "photo": "app/public/images/tom.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Angelina",
        "photo": "app/public/images/angelina.jpg",
        "scores": [
            3,
            2,
            4,
            1,
            5,
            1,
            4,
            2,
            4,
            1
        ]
    },
    {
        "name": "Brad",
        "photo": "app/public/images/brad.jpg",
        "scores": [
            2,
            5,
            4,
            1,
            3,
            1,
            4,
            5,
            4,
            2
        ]
    },
    {
        "name": "Channing",
        "photo": "app/public/images/channing.jpg",
        "scores": [
            3,
            1,
            4,
            5,
            3,
            5,
            4,
            5,
            3,
            2
        ]
    },
    {
        "name": "Charlize",
        "photo": "app/public/images/charlize.jpg",
        "scores": [
            1,
            2,
            4,
            2,
            3,
            3,
            4,
            5,
            1,
            5
        ]
    },
    {
        "name": "Jessica",
        "photo": "app/public/images/j_alba.jpg",
        "scores": [
            3,
            2,
            4,
            2,
            1,
            3,
            1,
            4,
            1,
            2
        ]
    },
    {
        "name": "Jason",
        "photo": "app/public/images/jason.jpg",
        "scores": [
            3,
            5,
            5,
            2,
            5,
            2,
            1,
            4,
            4,
            2
        ]
    },
    {
        "name": "Jennifer",
        "photo": "app/public/images/jennifer.jpg",
        "scores": [
            3,
            1,
            5,
            1,
            5,
            1,
            1,
            4,
            1,
            2
        ]
    },
    {
        "name": "Karen",
        "photo": "app/public/images/karen.jpg",
        "scores": [
            2,
            1,
            2,
            1,
            5,
            2,
            1,
            2,
            5,
            2
        ]
    },
    {
        "name": "Leo",
        "photo": "app/public/images/leo.jpg",
        "scores": [
            4,
            1,
            2,
            3,
            5,
            3,
            1,
            3,
            5,
            4
        ]
    },
    {
        "name": "Ryan",
        "photo": "app/public/images/ryan.jpg",
        "scores": [
            2,
            1,
            5,
            3,
            5,
            5,
            1,
            2,
            5,
            1
        ]
    },
    {
        "name": "Scarlet",
        "photo": "app/public/images/scarlet.jpg",
        "scores": [
            2,
            4,
            5,
            3,
            3,
            5,
            1,
            4,
            3,
            1
        ]
    },
    {
        "name": "Tom",
        "photo": "app/public/images/tom.jpg",
        "scores": [
            2,
            1,
            5,
            4,
            2,
            3,
            4,
            4,
            3,
            2
        ]
    },
];


// Routes
// =============================================================

// Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});