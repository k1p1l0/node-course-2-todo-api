let moongoose = require('mongoose');

let Todo = moongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		trim: true,
		minLength: 1
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	},
	_author: {
		type: moongoose.Schema.Types.ObjectId,
		required: true,
	}
});

module.exports = {
	Todo
};