let moongoose = require('mongoose');

moongoose.Promise = global.Promise;
moongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
	moongoose
};