const mongoose = require('mongoose');
const todos = require("./todo.js")

mongoose.connect("mongodb://localhost:27017/ToDo-App")
    .then((success)=>{
        console.log("db connected")
    })
    .catch((error)=>{
        console.log("db connection error")
    })

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'todos'
    }]
});



const User = mongoose.model("User", userSchema);

module.exports = {
    User
};