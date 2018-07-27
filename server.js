// Dependencies
// =============================================================
var bodyParser = require("body-parser");
var express = require("express");
var Friends = require("./app/data/friends.js")
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Static routing for public folder
app.use(express.static(path.join(__dirname + "/app/public")));

// Routes
// =============================================================

var apiRoutes = require("./app/routing/apiRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});