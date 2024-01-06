

/* 

title: string,
description: string,
completed: boolean

*/

const mongoose = require("mongoose")
// const { string } = require("zod")
mongoose.connect("mongodb+srv://admin:2Bm3DAmD9FNaaGrr@cluster0.0fogwws.mongodb.net/todo-application")

const todoSchema = {
    title : String,
    description: String,
    completed: Boolean
}


const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}