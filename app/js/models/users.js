var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {type: String, unique: true},
	password: String,
	email: String
});

module.exports = mongoose.model("Users", userSchema);