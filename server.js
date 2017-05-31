//Module requirements
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyparser = require('body-parser');

var app = express();
app.use(express.static('client'));
app.use(bodyparser.json());

	//Break database connection
	process.on('SIGINT', function(){
		console.log("Server wordt afgesloten");
		process.exit(0);
	});

	app.use(function(req, res, next) {
	  	res.header("Access-Control-Allow-Origin", "*");
	  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  	next();
	});

	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

app.listen(3000);
