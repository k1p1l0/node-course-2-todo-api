var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	let {id} = req.params;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id)
		.then((todo) => {
			if (!todo) {
				res.status(404).send();
			}

			res.status(200).send({todo});
		})
		.catch((e) => {
			res.status(400).send();
		})
});

app.delete('/todos/:id', (req, res) => {
	let {id} = req.params;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id)
		.then((doc) => {
			if (!doc) {
				return res.status(404).send();
			}

			res.status(200).send({todo: doc})
		})
		.catch((e) => res.status(400).send(e));

});


app.listen(port, () => console.log(`Started up on port ${port}`));

module.exports = {
	app
};