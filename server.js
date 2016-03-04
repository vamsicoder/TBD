var express = require("express");
var app = express();
var http = require("http").Server(app);
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var Users = require("./app/js/models/users.js");
mongoose.connect("mongodb://Vamsi:vamsi123@ds035563.mlab.com:35563/chat");

// Port
var port = process.env.PORT || 3000;

//Configure
function configure() {
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(express.static(__dirname + "/app"));
	app.use(express.static(__dirname + "/app/js"));
	app.use("/forms", express.static(__dirname + "/app/js/forms"));

	app.engine("html", require("ejs").renderFile);
}
configure();

// Default route

app.get("/", function(req, res) {
	res.renderFile("index.html");
});

// Routes for api

var router = express.Router();
router.route("/users")
	.get(function(req, res) {

		var params = {
			name : req.query.name,
			password : req.query.password
		}
		
		Users.find(params, function(err, users) {
			if(err) {
				res.send(err);
			}
			res.json(users);
		})
	})
	
	.post(function(req, res) {
		var user = new Users();
		user.name = req.body.name;
		user.password = req.body.password;

		user.save(function(err) {
			if(err) {
				res.send("Error: " + err);
			}
			res.send("User Saved successfully");
		});
	});

app.use("/api", router);

// Listen Server

http.listen(port, function() {
	console.log("listening on port : " + port);
});