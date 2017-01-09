'use strict';

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server', err);
	}

	console.log('Connected to MongoDB server')
	db.collection('Users').find().toArray().then(docs => console.log(JSON.stringify(docs, undefined, 2)));
	
	db.close();
});