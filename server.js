var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
// app.use(express.static(path.join(__dirname, './app/public')));
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, './app/public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, './app/public/survey.html'));
	});

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});






















// // Dependencies
// // =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// });


// app.get("/api/friends", function(req, res) {
//   return res.json(allFriends)

// });



// ////post function
// app.post("/api/new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var userData= req.body;

  
//   res.json(userData);

//   friends.push(userData);





  
// });







// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });