'use strict';

const fetch = require('node-fetch');
let theResponse;

fetch('https://openexchangerates.org/api/latest.json?app_id=e882b15594f94b799c164952d042e26a')
	.then(function(response){
		theResponse = response.json();
		return theResponse;
			}).
	then(function(theResponse){
		console.log(theResponse);
		return theResponse;
	});
