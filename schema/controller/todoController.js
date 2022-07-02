//Import the dependencies
const express = require('express');
const mongoose = require('mongoose');
//Creating a Router
var router = express.Router();
//Link
const Todo = mongoose.model('Todo');
 
//Router Controller for READ request
router.get('/',(req, res) => {
res.render("todo/todoAddEdit", {
viewTitle: "Insert a New todo for Todos"
});
});
 
//Router Controller for UPDATE request
router.post('/', (req,res) => {
if (req.body._id == '')
insertIntoMongoDB(req, res);
else
updateIntoMongoDB(req, res);
});
 
//Creating function to insert data into MongoDB
function insertIntoMongoDB(req,res) {
var todo = new Todo();
todo.todo_id = req.body.todo_id;
todo.todo_title = req.body.todo_title;
todo.todo_description = req.body.todo_description;
course.todo_timestamp = req.body.todo_timestamp;
course.save((err, doc) => {
if (!err)
res.redirect('todo/list');
else
console.log('Error during record insertion : ' + err);
});
}

//Creating a function to update data in MongoDB
function updateIntoMongoDB(req, res) {
    Todo.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) { res.redirect('todo/list'); }
    else {
    if (err.name == 'ValidationError') {
    handleValidationError(err, req.body);
    res.render("todo/todoAddEdit", {
    //Retaining value to be displayed in the child view
    viewTitle: 'Update todo Details',
    employee: req.body
    });
    }
    else
    console.log('Error during updating the record: ' + err);
    }
    });
    }

 //Creating a function to implement input validations
  function handleValidationError(err, body) {
        for (field in err.errors) {
        switch (err.errors[field].path) {
        case 'courseName':
        body['courseNameError'] = err.errors[field].message;
        break;
        default:
        break;
        }
        }
        }