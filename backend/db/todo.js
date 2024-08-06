const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title: String,
    body: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model("todos", todoSchema)

module.exports = todo