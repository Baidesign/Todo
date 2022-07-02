const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');
// attributes of the todo object

var todoSchema = new mongoose.Schema({
todo_id:{
    type: String,
    required: 'This field is required'
},
todo_title:{
    type: String
},
todo_description:{
    type: String
},
todo_timestamp:{
    type:String
}
});
mongoose.model('Todo',todoSchema)