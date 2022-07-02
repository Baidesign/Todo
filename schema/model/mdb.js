const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Todo',{useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('successfullyestablish connection')
    }else{
        console.log('error occured !!'+err)
    }
})

//connect to node and mongodb
require('./todo.model')