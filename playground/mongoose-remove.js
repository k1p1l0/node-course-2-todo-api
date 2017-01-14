const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('587a9a4d0e2ef9d605ec5633').then((doc) => {
	console.log(doc);
});