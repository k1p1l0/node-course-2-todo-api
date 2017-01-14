let moongoose = require('mongoose');

moongoose.Promise = global.Promise;
moongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
	moongoose
};