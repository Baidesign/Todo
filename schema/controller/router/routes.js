//Router to update a course using it's ID
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, doc) => {
    if (!err) {
    res.render("todo/todoAddEdit", {
    viewTitle: "Update Todo Details",
    todo: doc
    });
    }
    });
    });

router.get('/delete/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
    res.redirect('/Todo/list');
    }
    else { console.log('Failed to Delete Todo Details: ' + err); }
    });
    });
     
    module.exports = router;//Import the dependencies
    const express = require('express');
    const mongoose = require('mongoose');
    //Creating a Router
    var router = express.Router();
    //Link
    const Todo = mongoose.model('Todo');
     
    //Router Controller for READ request
    router.get('/',(req, res) => {
    res.render("todo/todoAddEdit", {
    viewTitle: "Insert a New Todo in Todos"
    });
    });
     
    //Router Controller for UPDATE request
    router.post('/', (req,res) => {
    if (req.body._id == '')
    insertIntoMongoDB(req, res);
    else
    updateIntoMongoDB(req, res);
    });
    //Creating a function to implement input validations
function handleValidationError(err, body) {
    for (field in err.errors) {
    switch (err.errors[field].path) {
    case 'todo_id':
    body['todo_idError'] = err.errors[field].message;
    break;
    default:
    break;
    }
    }
    }
     
    //Router to update a course using it's ID
    router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, doc) => {
    if (!err) {
    res.render("todo/todoAddEdit", {
    viewTitle: "Update Todo Details",
    course: doc
    });
    }
    });
    });
     
    //Router Controller for DELETE request
    router.get('/delete/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
    res.redirect('/todo/list');
    }
    else { console.log('Failed to Delete Todo Details: ' + err); }
    });
    });
     
    module.exports = router;//Import the dependencies
    const express = require('express');
    const mongoose = require('mongoose');
    //Creating a Router
    var router = express.Router();
    //Link
    const Todos = mongoose.model('Todo');
     
    //Router Controller for READ request
    router.get('/',(req, res) => {
    res.render("todo/todoAddEdit", {
    viewTitle: "Insert a New Todo for Edureka"
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
    var course = new Course();
    todo.todo_id = req.body.todo_id;
    todo.todo_title = req.body.todo_title;
    todo.todo_description = req.body.todo_description;
    todo.todo_timestamp = req.body.todo_timestamp;
    todo.save((err, doc) => {
    if (!err)
    res.redirect('course/list');
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
    viewTitle: 'Update Todo Details',
    employee: req.body
    });
    }
    else
    console.log('Error during updating the record: ' + err);
    }
    });
    }
     
    //Router to retrieve the complete list of available courses
    router.get('/list', (req,res) => {
    Todo.find((err, docs) => {
    if(!err){
    res.render("todo/list", {
    list: docs
    });
    }
    else {
    console.log('Failed to retrieve the Course List: '+ err);
    }
    });
    });
     
   
     
    //Router to update a course using it's ID
    router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, doc) => {
    if (!err) {
    res.render("todo/todoAddEdit", {
    viewTitle: "Update Todo Details",
    todo: doc
    });
    }
    });
    });
     
    //Router Controller for DELETE request
    router.get('/delete/:id', (req, res) => {
    Course.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
    res.redirect('/course/list');
    }
    else { console.log('Failed to Delete Course Details: ' + err); }
    });
    });
     
    module.exports = router;