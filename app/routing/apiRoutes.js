// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

var path = require("path");
var Friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function (req, res) {
        return res.json(Friends);
    });

    // Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

    app.post("/api/friends", function (req, res) {
        
        var userInput = req.body;

        var userRes = userInput.scores;
		
		// Compute best friend match
		var matchName = '';
		var matchImage = '';
        var totalDiff = 1000;

		// Examine all existing friends in the list
		for (var i = 0; i < Friends.length; i++) {
			
			// Compute differences for each question
			var diff = 0;
			for (var j = 0; j < userRes.length; j++) {
				diff += Math.abs(Friends[i].scores[j] - userRes[j]);
            }

			// If lowest difference, record the friend match
			if (diff <= totalDiff) {

				totalDiff = diff;
				matchName = Friends[i].name;
				matchImage = Friends[i].photo;
            }            
		};

		// Add new user
		Friends.push(userInput);

		// Send appropriate response
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });
};

