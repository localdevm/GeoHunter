//Declaring variables
var https = require('https');
var express = require('express');
var bodyparser = require('body-parser');
var fs  = require('fs');
var options = {
                key : fs.readFileSync('key.pem'),
                cert : fs.readFileSync('cert.pem')
              };

var app = express();

//Declare what app uses, client
app.use(express.static('client'));
app.use(bodyparser.json());

//Declare what to do on button press ^+C
process.on('SIGINT', function(){
  console.log("Closing down HTTPS server");
  process.exit(0);
});

//Result headers declareren
app.use(function(require, result, next){
    result.header("Access-Control-Allow-Origin", "*");
		result.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
});

//Create server
https.createServer(options, app).listen(5000);
console.log("Started HTTPS server on port 5000");
