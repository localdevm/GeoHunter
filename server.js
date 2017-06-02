
//Module requirements
var express = require('express');
var bodyparser = require('body-parser');


var app = express();
app.use(express.static('client'));
app.use(bodyparser.json());

//your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys


// Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:


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

app.post('/pay', function(request,res){
	// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_q3XTqeDRIs2L3ACIr9WpFGmd");

// Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
var token = request.body.stripeToken; // Using Express

// Charge the user's card:
var charge = stripe.charges.create({
  amount: 1000,
  currency: "eur",
  description: "Example charge",
  source: token,
}, function(err, charge) {
  // asynchronously called
});
})
app.listen(3000);
