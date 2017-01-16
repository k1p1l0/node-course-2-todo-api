let moongoose = require('mongoose');

moongoose.Promise = global.Promise;
moongoose.connect(process.env.MONGODB_URI);

module.exports = {
	moongoose
};
