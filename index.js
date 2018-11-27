const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const dbConnectionString = process.env.DATABASE_URL;

// remember no parentheses here for function call
app.get("/", testCallback);

app.listen(port, function(req, res){
	console.log("Server is listening on port " + port);
});

function testCallback(req, res){
	console.log("Getting website...");

	console.log("Trying to connect to a db at: " + dbConnectionString);

}