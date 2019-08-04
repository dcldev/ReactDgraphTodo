const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');

//Creating the Express server, attaching middleware CORS and Body-Parser
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established succesfully")
})


//Making the server to listen on port 4000
app.listen(PORT, function () {
    console.log("Server is running on Port: " + "http://localhost:"+PORT);

});


//Router is added to the middleware so that it can control requests starting with the path /todos:
app.use('/todos', todoRoutes);


//Adding an endpoint to where we are delivering all todo items from the database to the front-end

//This is a callback function that is executed once the results are available. The console log below exists in the case of an error.
todoRoutes.route('/').get(function(req,res) {
    Todo.find(function(err, todos) {
        //If there is an errow we will console log the error
        if (err) {
            console.log(err);
        } else { //Otherwise return the results in json format from the todos database
            res.json(todos);
        }
    });
});



todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findByID(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed')
        });
});

todoRoutes.route('/update/:id').post(function(req,res){
    Todo.findByID(req.params.id, function(err, todo){
        //If else conditional statement - If there is no todo then send error 404 - "data is not found"
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});