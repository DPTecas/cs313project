const express = require("express");
const app = express();

app.set('view engine', 'ejs');

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});

const port = process.env.PORT || 5000;
const dbConnectionString = process.env.DATABASE_URL;

// remember no parentheses here for function call
app.get("/", testCallback);

app.get("/getData", function(req, res){
	console.log("HELOOOOOOOOOOO" + getData(req, res));
	res.render('main');
});

app.listen(port, function(req, res){
	console.log("Server is listening on port " + port);
});

function testCallback(req, res){
	console.log("Getting website...");

	//console.log("Trying to connect to a db at: " + dbConnectionString);

	//just to load main page
	res.json({name: "will"});

}

// currently gets all data, will probably change
function getData(req, res) {
	var id = req.query.id;

	getTitleFromDb(id, function(error, result){

		if (error || result == null || result.length != 1) {
			res.status(500).json({success: false, data: error});
		} 
		else {
			var person = result[0];
			console.log(JSON.stringify(result[0]));
			return person;
		}
	});
	
}

// will grab the title from my database
function getTitleFromDb(id, callback) {
	console.log("Getting person from DB with id: " + id);

	var sql = "SELECT id, title FROM titles WHERE id = $1::int";

	var params = [id];

	pool.query(sql, params, function(err, result) {

		if (err) {
			console.log("Error in query: ")
			console.log(err);
			callback(err, null);
		}

		// Log this to the console for debugging purposes.
		console.log("Found result: " + JSON.stringify(result.rows));

		callback(null, result.rows);
	});
} 

function getDialoguesFromDb(id, callback) {
	console.log("Getting person from DB with id: " + id);

	var sql = "SELECT id, prompt, option1, option2, option3 FROM dialogues WHERE id = $1::int";

	var params = [id];

	pool.query(sql, params, function(err, result) {

		if (err) {
			console.log("Error in query: ")
			console.log(err);
			callback(err, null);
		}

		// Log this to the console for debugging purposes.
		console.log("Found result: " + JSON.stringify(result.rows));

		callback(null, result.rows);
	});
} 

function getCharactersFromDb(id, callback) {
	console.log("Getting person from DB with id: " + id);

	var sql = "SELECT id, name FROM characters WHERE id = $1::int";

	var params = [id];

	pool.query(sql, params, function(err, result) {

		if (err) {
			console.log("Error in query: ")
			console.log(err);
			callback(err, null);
		}

		// Log this to the console for debugging purposes.
		console.log("Found result: " + JSON.stringify(result.rows));

		callback(null, result.rows);
	});
} 

