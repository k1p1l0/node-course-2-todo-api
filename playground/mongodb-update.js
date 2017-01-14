'use strict';

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server', err);
	}

	console.log('Connected to MongoDB server')

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58735992a9138608a76b53f3')
	}, {
		$inc: {
			age: 3
		}
	}, {
		returnOrigin: true
	}).then(result => console.log(result));
	
	db.close();
});