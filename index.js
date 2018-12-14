const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});

const port = process.env.PORT || 5000;
const dbConnectionString = process.env.DATABASE_URL;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/getTitles", function(req, res){
	getTitles(req, res);
}); 

app.get("/getMap", function(req, res){
	res.render('map');
});

app.get("/getDialogues", function(req, res){
	getDialogues(req, res);
});

app.get("/getResponses", function(req, res){
	getResponses(req, res);
});

app.get("/getScores", function(req, res){
	getScores(req, res);
});

app.post("/postScores", function(req, res){
	postScores(req, res);
});

app.listen(port, function(req, res){
	console.log("Server is listening on port " + port);
});

// currently gets all data, will probably change
function getTitles(req, res) {
	getTitleFromDb(function(error, result){

		if (error || result == null || result.length != 1) {
			res.status(500).json({success: false, data: error});
		} 
		else {
			var titles = result;
			res.render('main', {titles:titles});
			res.end();
		}
	});	
}

function getDialogues(req, res) {
	var id = req.query.id;

	getDialoguesFromDb(id, function(error, result){

		if (error || result == null || result.length != 1) {
			res.status(500).json({success: false, data: error});
		} 
		else {
			var dia = result;
			res.json(dia);
		}
	});	
}

function getResponses(req, res) {
	var id = req.query.id;

	getResponsesFromDb(id, function(error, result){

		if (error || result == null || result.length != 1) {
			res.status(500).json({success: false, data: error});
		} 
		else {
			var dia = result;
			res.json(dia);
		}
	});	
}

function postScores(req, res) {
	var id = req.body.title_id;
	var name = req.body.name;
	var score = req.body.score;
	var category = req.body.category;

	postScoresFromDb(id, name, score, category, function(error, result){

		if (error || result == null || result.length != 1) {
			res.status(500).json({success: false, data: error});
		} 
		else {
			var score = result;
			res.status(200).json(score);
		}
	});	
}

function postScoresFromDb(title_id, name, score, category, callback) {
	var sql = 'INSERT INTO scores (title_id, name, score, category) VALUES ($1, $2, $3, $4) RETURNING id';

	var params = [title_id, name, score, category];

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

function getScores(req, res) {
	var title_id = req.query.title_id;

	getScoresFromDb(title_id, function(error, result){

		if (error || result == null || result.length != 1) {
			res.status(500).json({success: false, data: error});
		} 
		else {
			var stuff = result;
			res.json(stuff);
		}
	});	
}

function getScoresFromDb(title_id, callback) {
	var sql = 'SELECT s.name, s.score, s.category FROM scores s INNER JOIN titles t ON s.title_id = $1::int';

	var params = [title_id];

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

// will grab the title from my database
function getTitleFromDb(callback) {
	var sql = "SELECT id, title FROM titles";

	pool.query(sql, function(err, result) {

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

function getResponsesFromDb(id, callback) {
	console.log("Getting person from DB with id: " + id);

	var sql = "SELECT r1, r2, r3 FROM responses WHERE dia_id = $1::int";

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


