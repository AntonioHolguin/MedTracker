'use-strict';

var Alexa = require('alexa-sdk');
var constants = require('constants');
var functionalData = require('functionalAssets');

var date;


exports.handler= (event, context, callback) => {
    // TODO implement
    const alexa = Alexa.handler(event, context, callback);

    alexa.appId = constants.appId;

    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
	'LaunchRequest' : function () {
    	this.emit('CurrentTimeIntent');
	},

	'CurrentTimeIntent' : function () {
		date = new Date();
		this.attributes['timeRequested'] = date;
    	this.emit(':tell', date);
	},

	'NextMedIntent' : function () {
		date = new Date();
		this.response
    	this.emit(':tell', date);
	},

	'PreviousMedIntent' : function () {
		date = new Date();
    	this.emit(':tell', date);
	},

	'Unhandled' : function () {
		var data = functionalData[functionalData.findIndex(i => i.id === "UNHANDLED")];
		this.response.speak(data.speechOutput).listen(data.reprompt);
		this.emit(':responseReady');
	},

	'SessionEndedRequest': function () {
	    this.emit(':saveState', true); // Be sure to call :saveState to persist your session attributes in DynamoDB
	}
};
